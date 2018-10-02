from django.conf import settings
from django.conf.urls import include, url
from django.contrib import admin
from django.views.decorators.cache import cache_control
from django.views.generic import TemplateView

from wagtail.utils.urlpatterns import decorate_urlpatterns
from wagtail.contrib.wagtailsitemaps.views import sitemap
from wagtail.wagtailadmin import urls as wagtailadmin_urls
from wagtail.wagtailcore import urls as wagtail_urls
from wagtail.wagtaildocs import urls as wagtaildocs_urls

from girleffect.esi import views as esi_views
from girleffect.oidc_integration.views import LoginRedirectWithQueryStringView, LogoutRedirectView
from girleffect.search import views as search_views

if settings.OIDC_ENABLED:
    from girleffect.oidc_integration.views import PermissionDeniedView

# When OIDC is enabled, the login and logout related URLs must be defined before the other
# URL patterns since it overrides functionality provided by Django admin and Wagtail.
urlpatterns = [
    url(r'^oidc/', include('mozilla_django_oidc.urls')),
    url(r'^permission_denied/', PermissionDeniedView.as_view(), name="permission_denied"),
    # General login and logout URLs
    url(r'^login/', LoginRedirectWithQueryStringView.as_view(), name="login"),
    url(r'^logout/', LogoutRedirectView.as_view(), name="logout"),
    # Override default Django admin login
    url(r'^django-admin/login/', LoginRedirectWithQueryStringView.as_view()),
    url(r'^django-admin/logout/', LogoutRedirectView.as_view()),
    # Override default Wagtail admin login and logout
    url(r'^admin/login/', LoginRedirectWithQueryStringView.as_view()),
    url(r'^admin/logout/', LogoutRedirectView.as_view()),
] if settings.OIDC_ENABLED else []

urlpatterns.extend([
    url(r'^django-admin/', include(admin.site.urls)),
    url(r'^admin/', include(wagtailadmin_urls)),

    url(r'^documents/', include(wagtaildocs_urls)),
    url(r'^search/$', search_views.search, name='search'),
    url(r'^esi/(.*)/$', esi_views.esi, name='esi'),
    url('^sitemap\.xml$', sitemap),
])


if settings.DEBUG:
    from django.conf.urls.static import static
    from django.contrib.staticfiles.urls import staticfiles_urlpatterns

    # Serve static and media files from development server
    urlpatterns += staticfiles_urlpatterns()
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

    urlpatterns += [
        # Add views for testing 404 and 500 templates
        url(r'^test404/$', TemplateView.as_view(template_name='404.html')),
        url(r'^test500/$', TemplateView.as_view(template_name='500.html')),
    ]

if settings.DEBUG or settings.ENABLE_STYLEGUIDE:
    urlpatterns += [
        # Add styleguide
        url(r'^styleguide/$', TemplateView.as_view(template_name='styleguide.html')),
    ]

urlpatterns += [
    url(r'', include(wagtail_urls)),
]


# Cache-control
cache_length = getattr(settings, 'CACHE_CONTROL_MAX_AGE', None)

if cache_length:
    urlpatterns = decorate_urlpatterns(
        urlpatterns,
        cache_control(max_age=cache_length)
    )
