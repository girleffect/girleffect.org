#! /bin/sh
# vim:set sw=4 ts=4 et:

# Wrapper for rsync that allows to sync files with Kubernetes containers. Usage:
# rsync -a --delete --blocking-io -e kubernetes/kube-rsync.sh' pod_name:/remote/path/ /local/path/

podname=$1
shift;

exec kubectl exec -i ${podname} -- "$@"
