#!/bin/bash
cd /usr/software/dockerDatabase/docsearch
container_name="docsearch-scraper"
# 检查容器是否存在
if docker ps -a --format "{{.Names}}" | grep -q "^$container_name$"; then
    # 存在则获取容器ID
    container_id=$(docker ps -aqf "name=$container_name")
    # 停止容器
    docker stop $container_id
    # 删除容器
    docker rm $container_id
    echo "Container $container_name deleted."
fi
docker run -t --name $container_name --env-file=env -e "CONFIG=$(cat docsearch.json | jq -r tostring)" algolia/docsearch-scraper

# 定时爬取
# crontab -e
# 0 0 * * * nohup sh /usr/software/dockerDatabase/docsearch/auto_docsearch_scraper.sh >> /home/work/log/auto_docsearch_scraper_update.log 2>&1
