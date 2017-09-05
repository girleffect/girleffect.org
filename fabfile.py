from datetime import datetime
import os
from fabric.api import *

env.roledefs = {
    'production': []  # CHANGEME
}


# Production tasks
@roles('production')
def deploy_production():
    # Remove this line when you're happy that this task is correct
    raise RuntimeError("Please check the fabfile before using it")

    run('git pull')
    run('pip install -r requirements.txt')
    _run_migrate()
    run('django-admin collectstatic --noinput')

    # 'restart' should be an alias to a script that restarts the web server
    run('restart')

    _post_deploy()


@runs_once
@roles('production')
def pull_production_data():
    # Remove this line when you're happy that this task is correct
    raise RuntimeError("Please check the fabfile before using it")

    _pull_data(
        env_name='production',
        remote_db_name='girleffect',
        local_db_name='girleffect',
        remote_dump_path='/usr/local/django/girleffect/tmp/',
        local_dump_path='/tmp/',
    )

@runs_once
@roles('production')
def pull_production_media():
    local('rsync -avz %s:\'%s\' /vagrant/media/' % (env['host_string'], '$CFG_MEDIA_DIR'))


@runs_once
def _pull_data(env_name, remote_db_name, local_db_name, remote_dump_path, local_dump_path):
    timestamp = datetime.now().strftime('%Y%m%d-%I%M%S')

    filename = '.'.join([env_name, remote_db_name, timestamp, 'sql'])
    remote_filename = remote_dump_path + filename
    local_filename = local_dump_path + filename

    params = {
        'remote_db_name': remote_db_name,
        'remote_filename': remote_filename,
        'local_db_name': local_db_name,
        'local_filename': local_filename,
    }

    # Dump/download database from server
    run('pg_dump {remote_db_name} -xOf {remote_filename}'.format(**params))
    run('gzip {remote_filename}'.format(**params))
    get('{remote_filename}.gz'.format(**params), '{local_filename}.gz'.format(**params))
    run('rm {remote_filename}.gz'.format(**params))

    # Load database locally
    local('gunzip {local_filename}.gz'.format(**params))
    local('dropdb {local_db_name}'.format(**params))
    local('createdb {local_db_name}'.format(**params))
    local('psql {local_db_name} -f {local_filename}'.format(**params))
    local('rm {local_filename}'.format(**params))

    newsuperuser = prompt('Any superuser accounts you previously created locally will have been wiped. Do you wish to create a new superuser? (Y/n): ', default="Y")
    if newsuperuser == 'Y':
        local('django-admin createsuperuser')


@runs_once
def _run_migrate():
    run('django-admin migrate --noinput')


@runs_once
def _post_deploy():
    # clear frontend cache
    run(
        'for host in $(echo $CFG_HOSTNAMES | tr \',\' \' \'); do echo "Purge cache for $host";'
        'ats-cache-purge $host; '
        'done'
    )

    # update search index
    run('django-admin update_index')

# Staging tasks from k8s
def pull_staging_data():
    _pull_data_from_k8s(
        kube_app_label='staging',
        local_db_name='girleffect',
    )


def pull_staging_media():
    _pull_media_from_k8s(
        kube_app_label='staging',
        local_media_dir='/vagrant/media/',
        remote_media_dir='/data/media/',
    )


@runs_once
def _pull_media_from_k8s(kube_app_label, remote_media_dir, local_media_dir):
    # Get a pod name. We would need it for `kubectl cp` and `kubectl exec` calls
    kube_pod_name = _get_pod_name(kube_app_label)

    params = {
        'kube_pod_name': kube_pod_name,
        'remote_media_dir': remote_media_dir,
        'local_media_dir': local_media_dir,
    }

    local(
        'rsync -a --delete --blocking-io -e kubernetes/kube-rsync.sh'
        ' {kube_pod_name}:{remote_media_dir} {local_media_dir}'.format(**params)
    )


@runs_once
def _pull_data_from_k8s(kube_app_label, local_db_name):
    timestamp = datetime.now().strftime('%Y%m%d-%I%M%S')
    filename = '.'.join([local_db_name, timestamp, 'sql'])
    dump_path = os.path.abspath(os.path.join(os.sep, 'tmp', filename))

    kube_pod_name = _get_pod_name(kube_app_label)

    # Dump DB from Kubernetes
    local(
        'kubectl exec {kube_pod_name} -- bash -c \'pg_dump $DATABASE_URL -xO\' > {dump_path}'.format(
            dump_path=dump_path,
            kube_pod_name=kube_pod_name
        )
    )

    _restore_db(local_db_name, dump_path)


def _get_pod_name(kube_app_label):
    return local(
        'kubectl get pods -l app={kube_app_label} -o=jsonpath={{.items[0].metadata.name}}'.format(
            kube_app_label=kube_app_label,
        ),
        capture=True
    ).strip()
