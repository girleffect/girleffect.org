# -*- mode: ruby -*-
# vi: set ft=ruby :

require 'yaml'

# Output utils
def colorize(text, color_code)
  "\e[#{color_code}m#{text}\e[0m"
end
def red(text); colorize(text, 31); end


# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure(2) do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://atlas.hashicorp.com/search.
  config.vm.box = "torchbox/wagtail-jessie64"
  config.vm.box_version = "~> 2.0"

  # Disable automatic box update checking. If you disable this, then
  # boxes will only be checked for updates when the user runs
  # `vagrant box outdated`. This is not recommended.
  # config.vm.box_check_update = false

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8000" will access port 8000 on the guest machine.
  config.vm.network "forwarded_port", guest: 8000, host: 8000

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  # config.vm.network "private_network", ip: "192.168.33.10"

  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
  # config.vm.network "public_network"

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  # config.vm.synced_folder "../data", "/vagrant_data"

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
  # config.vm.provider "virtualbox" do |vb|
  #   # Display the VirtualBox GUI when booting the machine
  #   vb.gui = true
  #
  #   # Customize the amount of memory on the VM:
  #   vb.memory = "1024"
  # end
  #
  # View the documentation for the provider you are using for more
  # information on available options.

  # Define a Vagrant Push strategy for pushing to Atlas. Other push strategies
  # such as FTP and Heroku are also available. See the documentation at
  # https://docs.vagrantup.com/v2/push/atlas.html for more information.
  # config.push.define "atlas" do |push|
  #   push.app = "YOUR_ATLAS_USERNAME/YOUR_APPLICATION_NAME"
  # end

  # Enable provisioning with a shell script. Additional provisioners such as
  # Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the
  # documentation for more information about their specific syntax and use.
  # config.vm.provision "shell", inline: <<-SHELL
  #   sudo apt-get update
  #   sudo apt-get install -y apache2
  # SHELL
  config.vm.provision :shell, :path => "vagrant/provision.sh", :args => "girleffect"

  # Kubectl setup
  # Note that you must have `~/.kube/config` with a valid token
  kubectl_config_path = File.expand_path('~/.kube/config')
  kubectl_version = '1.7.2'
  kubectl_username = 'torchbox'
  kubectl_staging_apiserver = 'https://apiserver.staging.torchkube.gce.torchbox.net:8443'
  kubectl_staging_cert_url = 'https://account.torchbox.com/static/acctmgr/misc/torchbox-staging-ca.pem'
  kubectl_staging_namespace = 'girleffect-staging'

  if not File.exist? kubectl_config_path
    $stderr.puts(
      red("Unable to find kubeconfig on the host machine: #{kubectl_config_path}")
    )
  else

    # Get a list of kubectl users
    kubectl_users = YAML::load(File.read(kubectl_config_path)).fetch('users', [])

    # We need only one user with a name `kubectl_username`
    kubectl_users = kubectl_users.select{ |user| user['name'] == kubectl_username }

    if kubectl_users.empty?
      $stderr.puts(
        red(
            "Unable to find the user \"#{kubectl_username}\" in kubeconfig " \
            "on the host machine: #{kubectl_config_path}"
        )
      )
    else

      kubectl_token = kubectl_users[0].fetch('user', {}).fetch('token', '')
      if kubectl_token.empty?
        $stderr.puts(
          red(
            "Unable to find a valid token for the user \"#{kubectl_username}\" " \
            "in kubeconfig: #{kubectl_config_path}"
          )
        )
      else

        config.vm.provision :shell, run: "always", :path => "vagrant/kubernetes.sh",
          :args => [
            kubectl_version,
            kubectl_username, kubectl_token,
            kubectl_staging_apiserver, kubectl_staging_cert_url,
            kubectl_staging_namespace
          ]

      end
    end
  end

  # Enable agent forwarding over SSH connections.
  config.ssh.forward_agent = true

  if File.exist? "Vagrantfile.local"
    instance_eval File.read("Vagrantfile.local"), "Vagrantfile.local"
  end
end
