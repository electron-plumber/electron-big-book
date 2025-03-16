#!/bin/bash
cd /usr/software/dockerDatabase/docsearch
container_name="docsearch-scraper"
# Check if the container exists
if docker ps -a --format "{{.Names}}" | grep -q "^$container_name$"; then
    # If it exists,get the container id
    container_id=$(docker ps -aqf "name=$container_name")
    # Stop the container
    docker stop $container_id
    # Delete the container
    docker rm $container_id
    echo "Container $container_name deleted."
fi
docker run -t --name $container_name --env-file=env -e "CONFIG=$(cat docsearch.json | jq -r tostring)" algolia/docsearch-scraper

# timer crawl
# crontab -e
# 0 0 * * * nohup sh /usr/software/dockerDatabase/docsearch/auto_docsearch_scraper.sh >> /home/work/log/auto_docsearch_scraper_update.log 2>&1
