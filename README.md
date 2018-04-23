Girl Effect Wagtail site
==================

## Contributing

1. Make changes on a new branch, including a broad category and the ticket number if relevant e.g. `feature/123-extra-squiggles`, `fix/newsletter-signup`.
1. Push your branch to the remote.
1. Edit details as necessary.

If you need to preview work on `staging`, this can be merged and deployed manually without making a merge request. You can still make the merge request as above, but add a note to say that this is on `staging`, and not yet ready to be merged to `master`.

# Setting up a local build

This repository includes a Vagrantfile for running the project in a Debian VM and
a fabfile for running common commands with Fabric.

To set up a new build:

``` bash
git clone git@github.com:girleffect/girleffect.org.git
cd girleffect
vagrant up
vagrant ssh
```

Then within the SSH session:

``` bash
dj createsuperuser
djrun
```

This will make the site available on the host machine at: http://127.0.0.1:8000/


# Available Fabric commands (set up Kubernetes first - see below)

To populate your local database with the content of staging:

``` bash
fab pull_staging_data
```

Additionally, to fetch images from staging:

``` bash
fab pull_staging_media
```

(This will only take the "original" images. New versions of the other renditions will be recreated on the fly.)


# Deployment

We are using Kubernetes for our staging environment. We use GitLab CI (see `.gitlab-ci.yaml`) for deployment tasks. When a branch is merged with `staging`, a deployment pipeline runs.

# Setting up Kubernetes on your host machine

If you have not used Kubernertes before on a previous project you will need to set up your host machine.
Instructions can be found at

https://account.torchbox.com/kubernetes/

Here you can generate a token to access Kubernertes and configure your host machine. You only need follow the instructions to 'Install and setup kubectl' - there is no need to configure your namespace or add clusters in order to get the fab commands working.

If you want more information about Kubernertes see https://projects.torchbox.com/projects/sysadmin/notebook/Kubernetes
