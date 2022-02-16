# Build the application itself.
FROM python:3.7-buster

# Install non-python dependencies
# Step 1: Add the PGDG repo into the sources list
RUN apt-get update
RUN apt install curl ca-certificates gnupg && \
    curl https://www.postgresql.org/media/keys/ACCC4CF8.asc | gpg --dearmor | tee /etc/apt/trusted.gpg.d/apt.postgresql.org.gpg >/dev/null && \
    echo "deb https://apt.postgresql.org/pub/repos/apt/ buster-pgdg main" > /etc/apt/sources.list.d/pgdg.list && \
    # Step 2: Install wget and ca-certificates to be able to add a cert for PGDG
    apt-get install -y --no-install-recommends apt-transport-https wget ca-certificates && \
    # Step 3: Add the PDGD cert
    wget --no-check-certificate -qO - http://pkg.jenkins-ci.org/debian/jenkins-ci.org.key | apt-key add - && \
    # Step 4: Install the postgresql-client package
    apt-get update && apt-get install -y --force-yes --no-install-recommends \
    # We need postgresql-client to be able to use
    # `kubectl exec pg_dump` and `kubectl djnago-admin dbshell`
    postgresql-client \
    # Install rsync to be able to fetch media files
    rsync && \
    # Step 5: Cleanup apt cache and lists
    rm -rf /var/cache/apt/* /var/lib/apt/lists/*



WORKDIR /app
ENV PYTHONPATH /app

COPY site-redir-www-nonwww.conf /etc/nginx/conf.d/site-redir-www-nonwww.conf

# Install requirements - done in a separate step so Docker can cache it.
COPY requirements.txt /
RUN pip install --upgrade pip
RUN pip install -r /requirements.txt

# A wrapper script to run in the correct way (production/staging/review).
COPY kubernetes/run.sh /
ENTRYPOINT [ "/run.sh" ]

# Install application code.
COPY . /app
