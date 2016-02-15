#!/bin/bash -e

gulp clean
gulp build
aws s3 sync dist s3://$1 --include "*" --delete --no-follow-symlinks --acl public-read

