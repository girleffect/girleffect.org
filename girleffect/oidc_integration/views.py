from django.shortcuts import redirect
from django.urls import reverse
from django.utils.decorators import method_decorator
from django.views.decorators.cache import never_cache
from django.views.generic import RedirectView, TemplateView
from mozilla_django_oidc.views import OIDCLogoutView


@method_decorator(never_cache, "dispatch")
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
            # If a logged in user ends up here, it is because they do not have the necessary
            # permission to have accessed the page where they were trying to navigate to.
            return redirect(reverse("permission_denied"))

        return super().dispatch(request, *args, **kwargs)


@method_decorator(never_cache, "get")
class LogoutRedirectView(OIDCLogoutView):

    def get(self, request):
        return self.post(request)


class PermissionDeniedView(TemplateView):
    template_name = "oidc_integration/permission_denied.html"
