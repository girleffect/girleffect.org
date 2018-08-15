from django.conf import settings
from django.contrib import messages
from django.shortcuts import redirect
from django.views.generic import RedirectView
from mozilla_django_oidc.views import OIDCLogoutView


class LoginRedirectWithQueryStringView(RedirectView):
    """
    This view is used when a user needs to be redirected to the Authentication Service
    for login. The problem is that this view is also used when a user is already logged
    in but does not have the required permissions to view a resource.

    This view specifically checks if a user is already logged in, in which case it redirects
    the user to the homepage with a message explaining that access to the resource that was
    accessed is not allowed.
    """
    query_string = True
    pattern_name = "oidc_authentication_init"

    def dispatch(self, request, *args, **kwargs):
        if self.request.user.is_authenticated:
            # Since the user is already logged in, we take them to the home page.
            messages.info(self.request, "You are already logged in, but may not have the "
                                        "required permissions.")
            return redirect(settings.LOGOUT_REDIRECT_URL)

        return super().dispatch(request, *args, **kwargs)


class LogoutRedirectView(OIDCLogoutView):

    def get(self, request):
        return self.post(request)