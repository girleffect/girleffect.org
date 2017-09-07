#! /bin/sh
# vim:set sw=8 ts=8 noet:


KUBECTL_VERSION="$1"
KUBECTL_USER="$2"
KUBECTL_TOKEN="$3"
KUBECTL_STAGING_APISERVER="$4"
KUBECTL_STAGING_CERT_URL="$5"
KUBECTL_STAGING_NAMESPACE="$6"

KUBECTL_DIR=/usr/local/bin
KUBECTL_OS="linux"

set -e


###############################################################################
# Install kubectl.

if [ -e "${KUBECTL_DIR}/kubectl-${KUBECTL_VERSION}" -a -e "${KUBECTL_DIR}/kubectl" ] && \
   [ "$(readlink "${KUBECTL_DIR}/kubectl")" = "kubectl-${KUBECTL_VERSION}" ]; then
    printf 'kubectl v%s is already installed.\n' "${KUBECTL_VERSION}"
else
    if ! [ -e "${KUBECTL_DIR}/kubectl-${KUBECTL_VERSION}" ]; then
        printf 'Downloading kubectl v%s...\n\n' "${KUBECTL_VERSION}"

        url="https://storage.googleapis.com/kubernetes-release/release/v${KUBECTL_VERSION}/bin/${KUBECTL_OS}/amd64/kubectl"
        if ! sudo curl -LsSo "${KUBECTL_DIR}/kubectl-${KUBECTL_VERSION}" "${url}"; then
            printf >&2 'Failed to download kubectl.\n'
            exit 1
        fi

        sudo chmod 755 "${KUBECTL_DIR}/kubectl-${KUBECTL_VERSION}"
    fi

    printf '\n'
    printf 'Installing kubectl...'
    sudo ln -sf "kubectl-${KUBECTL_VERSION}" "${KUBECTL_DIR}/kubectl"

    printf ' all done!\n'
fi

###############################################################################
# Configure authentication.

su - vagrant -c "mkdir -p /home/vagrant/.kube"

# Setup an user
su - vagrant -c "kubectl config set-credentials ${KUBECTL_USER} --token='${KUBECTL_TOKEN}'"

# Staging
su - vagrant -c "curl -sSo /home/vagrant/.kube/staging-ca.pem $KUBECTL_STAGING_CERT_URL"
su - vagrant -c "kubectl config set-cluster staging --server=${KUBECTL_STAGING_APISERVER} --certificate-authority=/home/vagrant/.kube/staging-ca.pem"
su - vagrant -c "kubectl config set-context staging --cluster=staging --user=${KUBECTL_USER}"
su - vagrant -c "kubectl config set-context staging --namespace=${KUBECTL_STAGING_NAMESPACE}"
su - vagrant -c "kubectl config use-context staging"
