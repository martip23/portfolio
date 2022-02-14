#!/bin/bash

help()
{
    echo "arg1: region"
    echo "arg2: repository URL"
    echo "arg3: image name (no tag)"
    echo "arg4: new image tag"
}

printargs()
{
    echo "arg1: $1"
    echo "arg2: $2"
    echo "arg3: $3"
    echo "arg4: $4"
}

if [ "$1" == "help" ]; then
    help
    exit 0
fi

if [ $# -lt 4 ]; then
    echo "Illegal number of arguments"
    echo "Type help for help"
    help
    printargs
    exit 1
fi

region=$1
repository_url=$2
image_name=$3
new_tag=$4
debug=$5

if [ "$5" == "d" ]; then
    echo $region
    echo $repository
    echo $image_name
    echo $new_tag
fi

containers_to_stop=$(docker ps | grep $image_name* | awk '{ print $1 }')
echo CONTAINERS_TO_STOP : $containers_to_stop
if [ ! -z $containers_to_stop ]; then
    echo "Stopping and deleting existing containers"
    docker rm $(docker stop $containers_to_stop)
else
    echo "No containers to stop"
fi      

echo "Pulling new image"
aws ecr get-login-password --region $region | docker login --username AWS --password-stdin $repository_url
docker pull $repository_url/$image_name:$new_tag

echo "Starting new image"
docker run -d -p 80:80 --restart unless-stopped $repository_url/$image_name:$new_tag

exit 0