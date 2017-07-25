release: python manage.py migrate --noinput
web: uwsgi --http :$PORT --module girleffect.wsgi --master --offload-threads 1
