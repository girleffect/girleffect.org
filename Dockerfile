# Build the application itself.
FROM python:3.6.2-jessie

# Install non-python dependencies
# Step 1: Add the PGDG repo into the sources list
RUN echo "deb http://apt.postgresql.org/pub/repos/apt/ jessie-pgdg main" > /etc/apt/sources.list.d/pgdg.list && \
    # Step 2: Install wget and ca-certificates to be able to add a cert for PGDG
    wget -q -O - https://pkg.jenkins.io/debian/jenkins-ci.org.key && \
    apt-key add jenkins-ci.org.key
    # Step 3: Add the PDGD cert
    wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add - && \
    # Step 4: Install the postgresql-client package
    apt-get update && apt-get install -y --no-install-recommends \
    # We need postgresql-client to be able to use
    # `kubectl exec pg_dump` and `kubectl djnago-admin dbshell`
    postgresql-client-9.6 \
    # Install rsync to be able to fetch media files
    rsync && \
    # Step 5: Cleanup apt cache and lists
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
