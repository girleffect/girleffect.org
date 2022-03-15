import os

import django_cache_url
import dj_database_url
import raven

from .base import *  # noqa

# Do not set SECRET_KEY, Postgres or LDAP password or any other sensitive data here.
# Instead, use environment variables or create a local.py file on the server.

# Disable debug mode
DEBUG = False

# Raven (sentry) configuration.
# See instructions on the intranet:
# https://intranet.torchbox.com/delivering-projects/tech/starting-new-project/#sentry

INSTALLED_APPS += (
    'raven.contrib.django.raven_compat',
)

# Enable Admin Social Login
ENABLE_ALL_AUTH = os.environ.get('ENABLE_ALL_AUTH', True)

# Cache everything for 10 minutes
# This only applies to pages that do not have a more specific cache-control
# setting. See urls.py
CACHE_CONTROL_MAX_AGE = 600


# Configuration from environment variables
# Alternatively, you can set these in a local.py file on the server

env = os.environ.copy()

# Get running app details from DC/OS if available
_MARATHON_DOCKER_IMAGE = env.get('MARATHON_APP_DOCKER_IMAGE', None)
_MESOS_TASK_ID = env.get('MESOS_TASK_ID', None)
if _MARATHON_DOCKER_IMAGE:
    # get the docker image tag
    try:
        _RELEASE_VERSION = _MARATHON_DOCKER_IMAGE.split(':')[1]
    except IndexError:
        _RELEASE_VERSION = raven.fetch_git_sha(BASE_DIR)
else:
    _RELEASE_VERSION = raven.fetch_git_sha(BASE_DIR)
if _MESOS_TASK_ID:
    _SERVER_NAME = _MESOS_TASK_ID
else:
    # use the default
    import socket
    _SERVER_NAME = socket.gethostname()

# On Torchbox servers, many environment variables are prefixed with "CFG_"
for key, value in os.environ.items():
    if key.startswith('CFG_'):
        env[key[4:]] = value

# Basic configuration

APP_NAME = env.get('APP_NAME', 'girleffect')

if env.get('SECURE_SSL_REDIRECT', 'true') == 'true':
    SECURE_SSL_REDIRECT = True
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
# enable HSTS only once the site is working properly on https with the actual live domain name
SECURE_HSTS_SECONDS = 604800  # 1 week

if 'SECRET_KEY' in env:
    SECRET_KEY = env['SECRET_KEY']

if 'ALLOWED_HOSTS' in env:
    ALLOWED_HOSTS = env['ALLOWED_HOSTS'].split(',')

if 'PRIMARY_HOST' in env:
    BASE_URL = 'http://%s' % env['PRIMARY_HOST']

if 'SERVER_EMAIL' in env:
    SERVER_EMAIL = env['SERVER_EMAIL']
    DEFAULT_FROM_EMAIL = env['SERVER_EMAIL']

if 'EMAIL_SUBJECT_PREFIX' in env:
    EMAIL_SUBJECT_PREFIX = env['EMAIL_SUBJECT_PREFIX']

if 'EMAIL_HOST' in env:
    EMAIL_HOST = env['EMAIL_HOST']

if 'EMAIL_HOST_USER' in env:
    EMAIL_HOST_USER = env['EMAIL_HOST_USER']

if 'EMAIL_HOST_PASSWORD' in env:
    EMAIL_HOST_PASSWORD = env['EMAIL_HOST_PASSWORD']

if 'EMAIL_PORT' in env:
    EMAIL_PORT = env['EMAIL_PORT']

if 'EMAIL_USE_TLS' in env:
    EMAIL_USE_TLS = True

if 'CACHE_PURGE_URL' in env:
    INSTALLED_APPS += ('wagtail.contrib.wagtailfrontendcache', )  # noqa
    WAGTAILFRONTENDCACHE = {
        'default': {
            'BACKEND': 'wagtail.contrib.wagtailfrontendcache.backends.HTTPBackend',
            'LOCATION': env['CACHE_PURGE_URL'],
        },
    }

if 'STATIC_URL' in env:
    STATIC_URL = env['STATIC_URL']

if 'STATIC_DIR' in env:
    STATIC_ROOT = env['STATIC_DIR']

if 'MEDIA_URL' in env:
    MEDIA_URL = env['MEDIA_URL']

if 'MEDIA_DIR' in env:
    MEDIA_ROOT = env['MEDIA_DIR']

# S3 File Storage
if all(v in env for v in ['AWS_ACCESS_KEY_ID', 'AWS_SECRET_ACCESS_KEY', 'AWS_STORAGE_BUCKET_NAME']):
    DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
    AWS_ACCESS_KEY_ID = env['AWS_ACCESS_KEY_ID']
    AWS_SECRET_ACCESS_KEY = env['AWS_SECRET_ACCESS_KEY']
    AWS_STORAGE_BUCKET_NAME = env['AWS_STORAGE_BUCKET_NAME']
    AWS_S3_OBJECT_PARAMETERS = {
        'CacheControl': 'max-age=86400',
    }
    AWS_S3_FILE_OVERWRITE = False
    S3_USE_SIGV4 = True

# Sentry Config
if 'SENTRY_DSN' in env:
    RAVEN_CONFIG = {
        'dsn': env['SENTRY_DSN'],
        'release': _RELEASE_VERSION,
        'name': _SERVER_NAME,
    }

# Database
if 'DATABASE_URL' in os.environ:
    DATABASES = {'default': dj_database_url.config()}

else:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql_psycopg2',
            'NAME': env.get('PGDATABASE', APP_NAME),
            # User, host and port can be configured by the PGUSER, PGHOST and
            # PGPORT environment variables (these get picked up by libpq).
        }
    }


# Redis
# django_cache_url defaults to memcache
CACHE_URL = env.get('CACHE_URL', '')
if CACHE_URL:
    CACHES = {'default': django_cache_url.config()}


# Celery
# Ask sysadmin to add `CFG_BROKER_URL` env var, if you need celery.

if 'BROKER_URL' in env:
    BROKER_URL = env['BROKER_URL']

# Postgres as search

WAGTAILSEARCH_BACKENDS = {
    'default': {
        'BACKEND': 'wagtail.contrib.postgres_search.backend',
        'INDEX': 'girleffect',
        'ATOMIC_REBUILD': True,
    },
}

# Logging

if 'LOG_DIR' in env:
    # Girl Effect log
    LOGGING['handlers']['girleffect_file'] = {
        'level': 'INFO',
        'class': 'cloghandler.ConcurrentRotatingFileHandler',
        'formatter': 'verbose',
        'filename': os.path.join(env['LOG_DIR'], 'girleffect.log'),
        'maxBytes': 5242880,  # 5MB
        'backupCount': 5
    }
    LOGGING['loggers']['girleffect']['handlers'].append('girleffect_file')

    # Wagtail log
    LOGGING['handlers']['wagtail_file'] = {
        'level': 'INFO',
        'class': 'cloghandler.ConcurrentRotatingFileHandler',
        'formatter': 'verbose',
        'filename': os.path.join(env['LOG_DIR'], 'wagtail.log'),
        'maxBytes': 5242880,  # 5MB
        'backupCount': 5
    }
    LOGGING['loggers']['wagtail']['handlers'].append('wagtail_file')

    # Error log
    LOGGING['handlers']['errors_file'] = {
        'level': 'ERROR',
        'class': 'cloghandler.ConcurrentRotatingFileHandler',
        'formatter': 'verbose',
        'filename': os.path.join(env['LOG_DIR'], 'error.log'),
        'maxBytes': 5242880,  # 5MB
        'backupCount': 5
    }
    LOGGING['loggers']['django.request']['handlers'].append('errors_file')
    LOGGING['loggers']['django.security']['handlers'].append('errors_file')


try:
    from .local import *  # noqa
except ImportError:
    pass
