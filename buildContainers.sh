#!/usr/bin/env bash
sudo docker build . --tag andersgee/web:latest --build-arg SCOPE=web
sudo docker build . --tag andersgee/docs:latest --build-arg SCOPE=docs

########
# Push #
########
#sudo docker push andersgee/hello-world
#sudo docker push andersgee/docs


#sudo docker image prune -a

# on server do this to pull same tag (latest) again. 
#docker-compose stop
#docker-compose rm -f
#docker-compose pull   
#docker-compose up -d

