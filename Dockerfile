# Tells Docker what base image we want to build from.
FROM python:3.6.1

WORKDIR /app
ENV PYTHONPATH /app

# Install requirements - done in a separate step so Docker can cache it.
COPY requirements.txt /
RUN pip install -r /requirements.txt

# A wrapper script to run in the correct way (production/staging/review).
COPY kubernetes/run.sh /
ENTRYPOINT [ "/run.sh" ]

# Install application code.
COPY . /app

RUN CFG_SECRET_KEY=none django-admin.py collectstatic --noinput --settings=girleffect.settings.production
