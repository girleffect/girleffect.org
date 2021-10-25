# Build the application itself.
FROM python:3.6.2-jessie

# Install non-python dependencies
# Step 1: Add the PGDG repo into the sources list
RUN apt-get update
RUN rm -rf /var/cache/apt/* /var/lib/apt/lists/*
RUN echo "deb https://apt.postgresql.org/pub/repos/apt/ pool main" > /etc/apt/sources.list.d/pgdg.list && \
    apt-get install -y --no-install-recommends wget ca-certificates && \
    wget --no-check-certificate -qO - http://pkg.jenkins-ci.org/debian/jenkins-ci.org.key | apt-key add - && \
    apt-get update && apt-get install -y --no-install-recommends \
    postgresql-client-9.6 \
    rsync && \
    rm -rf /var/cache/apt/* /var/lib/apt/lists/*


WORKDIR /app
ENV PYTHONPATH /app

COPY site-redir-www-nonwww.conf /etc/nginx/conf.d/site-redir-www-nonwww.conf

# Install requirements - done in a separate step so Docker can cache it.
COPY requirements.txt /
RUN pip install -r /requirements.txt

# A wrapper script to run in the correct way (production/staging/review).
COPY kubernetes/run.sh /
ENTRYPOINT [ "/run.sh" ]

# Install application code.
COPY . /app
