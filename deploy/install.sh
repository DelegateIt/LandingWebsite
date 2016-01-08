#!/bin/bash

docker create --name web -p 80:80 -p 443:443 --restart=always -v /var/www:/usr/share/nginx/html:ro -v /home/ubuntu/nginx-site:/etc/nginx/sites-available/default:ro -v /etc/letsencrypt/archive/godelegateit.com:/etc/letsencrypt/archive/godelegateit.com:ro delegateit/gatweb
