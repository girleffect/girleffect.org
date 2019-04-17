"""
Django settings for girleffect project.

Generated by 'django-admin startproject' using Django 1.8.2.

For more information on this file, see
https://docs.djangoproject.com/en/1.8/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.8/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os

from django.urls import reverse_lazy

PROJECT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE_DIR = os.path.dirname(PROJECT_DIR)

OIDC_ENABLED = os.environ.get("USE_OIDC", False)

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.8/howto/deployment/checklist/


# Application definition

INSTALLED_APPS = [
    'girleffect.categories',
    'girleffect.countries',
    'girleffect.esi',
    'girleffect.home',
    'girleffect.images',
    'girleffect.jobs',
    'girleffect.navigation',
    'girleffect.articles',
    'girleffect.partners',
    'girleffect.people',
    'girleffect.search',
    'girleffect.solutions',
    'girleffect.standardpage',
    'girleffect.utils',

    'wagtail.contrib.postgres_search',
    'wagtail.contrib.wagtailsitemaps',
    'wagtail.contrib.wagtailsearchpromotions',
    'wagtail.contrib.settings',
    'wagtail.wagtailforms',
    'wagtail.wagtailredirects',
    'wagtail.wagtailembeds',
    'wagtail.wagtailsites',
    'wagtail.wagtailusers',
    'wagtail.wagtailsnippets',
    'wagtail.wagtaildocs',
    'wagtail.wagtailimages',
    'wagtail.wagtailsearch',
    'wagtail.wagtailadmin',
    'wagtail.wagtailcore',

    'modelcluster',
    'taggit',
    'django_extensions',
    'template_debug',
    'captcha',
    'storages',
    'wagtailcaptcha',
    'wagtailfontawesome',
    'wagtailmedia',
    'django_user_agents',

    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

if OIDC_ENABLED:
    INSTALLED_APPS = ["girleffect.oidc_integration"] + INSTALLED_APPS + [
        'mozilla_django_oidc',  # Must be loaded after django.contrib.auth
    ]
    AUTHENTICATION_BACKENDS = [
        'girleffect.oidc_integration.auth.GirlEffectOIDCBackend',
    ]
else:
    AUTHENTICATION_BACKENDS = [
        'django.contrib.auth.backends.ModelBackend',
    ]

MIDDLEWARE_CLASSES = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',

    'wagtail.wagtailcore.middleware.SiteMiddleware',
    'wagtail.wagtailredirects.middleware.RedirectMiddleware',
    'girleffect.esi.middleware.ESIMiddleware',
    'django_user_agents.middleware.UserAgentMiddleware',
]

ROOT_URLCONF = 'girleffect.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(PROJECT_DIR, 'templates'),
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'wagtail.contrib.settings.context_processors.settings',
            ],
        },
    },
]

WSGI_APPLICATION = 'girleffect.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.8/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'girleffect',
    }
}


# Password validation
# https://docs.djangoproject.com/en/1.9/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/1.8/topics/i18n/

LANGUAGE_CODE = 'en-gb'

TIME_ZONE = 'Europe/London'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.8/howto/static-files/

STATICFILES_STORAGE = 'django.contrib.staticfiles.storage.ManifestStaticFilesStorage'

STATICFILES_FINDERS = [
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
]

STATICFILES_DIRS = [
    os.path.join(PROJECT_DIR, 'static_src', 'dist'),
]

STATIC_ROOT = os.path.join(BASE_DIR, 'static')
STATIC_URL = '/static/'

MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = '/media/'

SILENCED_SYSTEM_CHECKS = ['captcha.recaptcha_test_key_error']

# Logging

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'mail_admins': {
            'level': 'ERROR',
            'class': 'django.utils.log.AdminEmailHandler',
            'formatter': 'verbose',
        },
        'console': {
            'level': 'ERROR',
            'class': 'logging.StreamHandler',
            'formatter': 'verbose',
        }
    },
    'formatters': {
        'verbose': {
            'format': '[%(asctime)s] (%(process)d/%(thread)d) %(name)s %(levelname)s: %(message)s'
        }
    },
    'loggers': {
        'girleffect': {
            'handlers': [],
            'level': 'INFO',
            'propagate': False,
        },
        'wagtail': {
            'handlers': [],
            'level': 'INFO',
            'propagate': False,
        },
        'django.request': {
            'handlers': ['mail_admins', 'console'],
            'level': 'ERROR',
            'propagate': False,
        },
        'django.security': {
            'handlers': ['mail_admins'],
            'level': 'ERROR',
            'propagate': False,
        },
         'mozilla_django_oidc': {
            'handlers': ['console'],
            'level': 'INFO'
        },
    },
}


# Wagtail settings

WAGTAIL_SITE_NAME = "Girl Effect"

WAGTAILIMAGES_IMAGE_MODEL = "images.CustomImage"
WAGTAILMEDIA_MEDIA_MODEL = 'utils.CustomMedia'
WAGTAILIMAGES_FEATURE_DETECTION_ENABLED = False

PASSWORD_REQUIRED_TEMPLATE = 'password_required.html'

DEFAULT_PER_PAGE = 10

ESI_ENABLED = False

# Custom settings

ENABLE_STYLEGUIDE = False

# Django User Agent Cache

USER_AGENTS_CACHE = 'default'

if OIDC_ENABLED:

    # Mozilla Django OIDC Settings
    OIDC_STORE_ID_TOKEN = True  # Used by girleffect.oidc_integration.utils.provider_logout_url()

    OIDC_RP_CLIENT_ID = os.environ['OIDC_RP_CLIENT_ID']
    OIDC_RP_CLIENT_SECRET = os.environ['OIDC_RP_CLIENT_SECRET']
    OIDC_RP_SCOPES = 'openid profile email site roles'
    OIDC_OP_AUTHORIZATION_ENDPOINT = os.environ['OIDC_OP_AUTHORIZATION_ENDPOINT']
    OIDC_OP_TOKEN_ENDPOINT = os.environ['OIDC_OP_TOKEN_ENDPOINT']
    OIDC_OP_USER_ENDPOINT = os.environ['OIDC_OP_USER_ENDPOINT']
    # A method that will construct a logout URL for the Authentication Service.
    # This is only required if the user needs to be logged out of the Authentication Service as well
    # as this application.
    OIDC_OP_LOGOUT_URL_METHOD = 'girleffect.oidc_integration.utils.provider_logout_url'
    OIDC_OP_LOGOUT_URL = os.environ['OIDC_OP_LOGOUT_URL']
    # Redirect URL required by Auth Service post logout.
    WAGTAIL_REDIRECT_URL = os.environ['WAGTAIL_REDIRECT_URL']

    LOGIN_URL = reverse_lazy('login')
    LOGIN_REDIRECT_URL = '/'
    LOGOUT_REDIRECT_URL = '/'
else:
    OIDC_ENABLED = False
