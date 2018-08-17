"""
This package contains customisations specific to the Girl Effect project.
The technical background can be found here:
https://mozilla-django-oidc.readthedocs.io/en/stable/installation.html#additional-optional-configuration
"""
import itertools
import logging

from django.contrib import messages
from django.contrib.auth.models import Group
from mozilla_django_oidc.auth import OIDCAuthenticationBackend

USERNAME_FIELD = "username"
EMAIL_FIELD = "email"

LOGGER = logging.getLogger(__name__)


class CorporateSiteGroup:
    """
    The members of this class maps to the text representation (case sensitive) of the
    groups defined in the application.
    """
    ADMINISTRATOR = "Administrator"
    SITE_ADMIN = "Site admin"
    SITE_EDITOR = "Site editor"
    SITE_VIEWER = "Site viewer"


CORE_ROLES_TO_GROUP_MAP = {
    "tech_admin": [CorporateSiteGroup.ADMINISTRATOR, CorporateSiteGroup.SITE_ADMIN],
    "product_tech_admin": [CorporateSiteGroup.ADMINISTRATOR, CorporateSiteGroup.SITE_ADMIN],
    "governance_admin": [CorporateSiteGroup.ADMINISTRATOR, CorporateSiteGroup.SITE_ADMIN],
    "data_admin": [CorporateSiteGroup.ADMINISTRATOR, CorporateSiteGroup.SITE_ADMIN],
    "content_admin": [CorporateSiteGroup.ADMINISTRATOR, CorporateSiteGroup.SITE_ADMIN],
    "data_editor": [CorporateSiteGroup.SITE_EDITOR],
    "content_editor": [CorporateSiteGroup.SITE_EDITOR],
    "governance_viewer": [CorporateSiteGroup.SITE_VIEWER],
    "data_viewer": [CorporateSiteGroup.SITE_VIEWER],
    "content_viewer": [CorporateSiteGroup.SITE_VIEWER]
}


def _update_user_from_claims(user, claims):
    """
    Update the user profile with information from the claims.
    This function is called on registration (new user) as well as login events.
    This function provides the mapping from the OIDC claims fields to the
    internal user profile fields.
    In this example we use the role names as the names for Django Groups to which a user belongs.
    :param user: The user profile
    :param claims: The claims for the profile
    """
    LOGGER.debug("Updating user {} with claims: {}".format(user, claims))

    user.first_name = claims.get("given_name") or claims["nickname"]
    user.last_name = claims.get("family_name") or ""
    user.email = claims.get("email") or ""
    user.save()

    # Synchronise the roles that the user has. The list of roles may contain more or less roles
    # than the previous time the user logged in.
    roles = set(claims.get("roles", []))

    if roles:
        user.is_staff = True
        if "tech_admin" in roles or "product_tech_admin" in roles:
            user.is_superuser = True
    else:
        user.is_staff = False
        user.is_superuser = False
    user.save()

    if "tech_admin" in roles or "product_tech_admin" in roles:
        # Tech admins are linked to all groups
        groups_from_roles = [group.name for group in Group.objects.all()]
    else:
        groups_from_roles = set(itertools.chain.from_iterable(
            CORE_ROLES_TO_GROUP_MAP.get(role, []) for role in roles
        ))
    groups_currently_assigned = set(group.name for group in user.groups.all())
    groups_to_add = groups_from_roles - groups_currently_assigned
    groups_to_remove = groups_currently_assigned - groups_from_roles

    for group_name in groups_to_add:
        try:
            group = Group.objects.get(name=group_name)
            user.groups.add(group)
            LOGGER.debug("Added user to group {}: {}".format(user, group_name))
        except Group.DoesNotExist:
            LOGGER.error("Cannot link user to non-existed group: {}".format(group_name))

    args = [Group.objects.get(name=group_name) for group_name in groups_to_remove]
    user.groups.remove(*args)
    LOGGER.debug("Removed groups from user {}: {}".format(user, groups_to_remove))

    site_specific_data = claims.get("site")
    if site_specific_data:
        LOGGER.debug("Got site specific data: {}".format(site_specific_data))


class GirlEffectOIDCBackend(OIDCAuthenticationBackend):

    def filter_users_by_claims(self, claims):
        """
        The default behaviour is to look up users based on their email
        address. However, in the Girl Effect ecosystem the email is optional,
        so we prefer to use the UUID associated with the user profile (
        subject identifier)
        :return: A user identified by the claims, else None
        """
        uuid = claims["sub"]
        messages.success(self.request, claims.get("migration_information"))
        try:
            kwargs = {USERNAME_FIELD: uuid}
            user = self.UserModel.objects.get(**kwargs)
            # Update the user with the latest info
            _update_user_from_claims(user, claims)
            return [user]
        except self.UserModel.DoesNotExist:
            LOGGER.debug("Lookup failed based on {}".format(kwargs))

        # The code below is an example of how we can perform a secondary check
        # on the email address.
        # email = claims.get("email")
        # if email:
        #     try:
        #         kwargs = {EMAIL_FIELD: email}
        #         return [self.UserModel.objects.get(**kwargs)]
        #     except self.UserModel.DoesNotExist:
        #         LOGGER.debug("Lookup failed based on {}".format(kwargs))

        return self.UserModel.objects.none()

    def create_user(self, claims):
        """Return object for a newly created user account.
        The default OIDC client create_user() function expects an email address
        to be available. This is not the case for Girl Effect accounts, where
        the email field is optional.
        We use the user id (called the subscriber identity in OIDC) as the
        username, since it is always available and guaranteed to be unique.
        """
        username = claims["sub"]  # The sub field _must_ be in the claims.
        email = claims.get("email")  # Email is optional
        # We create the user based on the username and optional email fields.
        user = self.UserModel.objects.create_user(username, email)
        _update_user_from_claims(user, claims)
        return user

    def verify_claims(self, claims):
        """
        This function can be used to prevent authorisation of users based
        on claims information.
        """
        verified = super(GirlEffectOIDCBackend, self).verify_claims(claims)
        # Example of how to prevent users without a verified email from
        # logging in.
        # verified = verified and claims.get("email_verified")
        return verified

    # def verify_token(self, token, **kwargs):
    #     site = get_current_site(self.request)
    #     if not hasattr(site, "oidcsettings"):
    #         raise RuntimeError(f"Site {site} has no settings configured.")
    #
    #     self.OIDC_RP_CLIENT_SECRET = site.oidcsettings.oidc_rp_client_secret
    #    return super().verify_token(token, **kwargs)

    # def authenticate(self, **kwargs):
    #     if "request" in kwargs:
    #         site = get_current_site(kwargs["request"])
    #         if not hasattr(site, "oidcsettings"):
    #             raise RuntimeError(f"Site {site} has no settings configured.")
    #
    #         self.OIDC_RP_CLIENT_ID = site.oidcsettings.oidc_rp_client_id
    #         self.OIDC_RP_CLIENT_SECRET = site.oidcsettings.oidc_rp_client_secret
    #
    #    return super().authenticate(**kwargs)
