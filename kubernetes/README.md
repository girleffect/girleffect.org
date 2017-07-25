How to deploy your project on Kubernetes:

* Generate a project with Kubernetes support from the Wagtail kit template
* Ask sysadmin to provision a staging environment for your repository;
* Create a Gitlab protected pipeline secret called `SECRET_KEY` with a long random string (e.g., the output of `pwgen -s 64 1`).
  Note that Gitlab CI passes protected variables only into pipelines with protected branches and tags,
  so you need to make sure that your `staging` branch is protected.;
* Commit and push.

Only projects hosted on git.torchbox.com are supported for now.
