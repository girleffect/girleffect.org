#! /bin/sh
# vim:set sw=4 ts=4 et:

set -e

# Set up $CFG_MEDIA_DIR
mkdir -p /data/media
CFG_MEDIA_DIR=/data/media
export CFG_MEDIA_DIR

# To avoid accidental data loss, refuse to start unless a volume is mounted
# on our media directory.
if [ "$(stat -c%D /)" = "$(stat -c%D "${CFG_MEDIA_DIR}")" ]; then
    printf >&2 'error: no filesystem mounted on "%s"; refusing to start.\n' "$CFG_MEDIA_DIR"
    exit 1
fi

# Any host is fine (Kubernetes will prevent invalid hosts from reaching the
# application).
CFG_ALLOWED_HOSTS='*'
export CFG_ALLOWED_HOSTS

if [ "${REVIEW_APP}" = true ]; then
    # Random secret key.
    CFG_SECRET_KEY="$(dd if=/dev/urandom bs=1 count=32 2>/dev/null | base64)"
    export CFG_SECRET_KEY

    # No TLS on review apps yet.
    SECURE_SSL_REDIRECT=false
    export SECURE_SSL_REDIRECT

    django-admin.py migrate --noinput

    # Create a default admin/admin user.
    python bin/createsuperuser.py
else
    # We are a real application (staging/production).

    if [ -z "${SECRET_KEY}" ]; then
        printf >&2 'error: $SECRET_KEY is not set.\n'
        exit 1
    fi

    # Run database migrations on startup.  This won't work properly if there's
    # more than one replica.
    django-admin.py migrate --noinput
fi

exec uwsgi --ini kubernetes/uwsgi.ini "$@"
