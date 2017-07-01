#!/bin/bash

# Break immediately if anything fails
set -e

#### Install Git ####
if ! type "git" &> /dev/null; then
    
    echo "Installing Git..."

    # Install Git
    sudo yum install -y git-all

    # References:
    # [1] https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
    echo "Completed installation of Git"
fi

#### Get project source code ####

    # Get the source code
    echo "Fetching application code from GitHub..."
    cd $HOME && \
    git clone https://github.com/jameslamb/chessviz && \
    cd chessviz && \
    git fetch origin dev && \
    git checkout dev
    echo "Completed fetching application code from GitHub."

#### Install misc. system components ####

#### Install conda + Anaconda Python 3.5 ####

if ! type "conda" &> /dev/null; then

    echo "Installing conda..."

    # grab lein install source
    CONDA_SCRIPT="https://repo.continuum.io/archive/Anaconda3-4.4.0-Linux-x86_64.sh"
    curl $CONDA_SCRIPT > $HOME/install_conda.sh

    # Make it executable
    chmod a+rwx $HOME/install_conda.sh
    cd $HOME
    ./install_conda.sh -b -p $HOME/ananconda3

    # Put anaconda3 on our PATH
    echo "export PATH=$HOME/anaconda3/bin:$PATH" >> ~/.bashrc

    echo "Completed installation of conda."
fi

#### Components needed to run Flask app ####

    echo "Installing components necessary to run Flask app.."

    # use nginx as a webserver
    sudo yum install -y nginx

    # Update nginx.conf
    sudo chown ec2-user -R /etc/nginx
    cp $HOME/chessviz/setup/nginx.conf /etc/nginx/nginx.conf

    # Update the server config with this instance's public DNS
    PUBLIC_DNS=$(curl -s http://169.254.169.254/latest/meta-data/public-hostname)
    python $HOME/chessviz/setup/sub_in_pub_dns.py $PUBLIC_DNS
    cp $HOME/chessviz/setup/virtual.conf /etc/nginx/conf.d/virtual.conf

    # References:
    # [1] https://www.matthealy.com.au/blog/post/deploying-flask-to-amazon-web-services-ec2/
    # [2] http://nginx.org/en/docs/beginners_guide.html
    echo "Installation of Flask components complete."

#### Install python package and conda env ####

    # Set up variables (since Anaconda isn't on our path yet)
    CONDA_BIN="/home/ec2-user/anaconda3/bin"
    ACTIVATE_ALIAS="$CONDA_BIN/activate"
    DEACTIVATE_ALIAS="$CONDA_BIN/deactivate"
    CONDA_ENV_ALIAS="$CONDA_BIN/conda-env"

    # Create chessviz conda environment
    cd $HOME/chessviz/python && \
    $CONDA_ENV_ALIAS create -n chessviz -f chessviz.yml && \
    sudo python setup.py install
    
    # Install chessviz python package into that environment
    cd $HOME/chessviz/python && \
    source $ACTIVATE_ALIAS chessviz && \
    sudo python setup.py install && \
    source $DEACTIVATE_ALIAS chessviz

    # Add chessviz package to PYTHONPATH to be super sure
    echo "export PYTHONPATH=/home/ec2-user/chessviz/python:$PYTHONPATH" >> ~/.bashrc
