#!/bin/bash -e

s3bucket="godelegateit.com"

gulp clean
gulp build

echo "Pushing changes to $s3bucket"
aws s3 sync www s3://$s3bucket --include "*" --delete --no-follow-symlinks --acl public-read

echo "Invalidating cache in cloudfront"
aws cloudfront create-invalidation --distribution-id E2QNP3K5NUAYBE --paths "/*"

