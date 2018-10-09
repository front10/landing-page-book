#!/bin/bash

set -e # exit with nonzero exit code if anything fails

if [[ $TRAVIS_BRANCH == "master" && $TRAVIS_PULL_REQUEST == "false" ]]; then

echo "Starting to update gh-pages\n"

git config --global user.email $GIT_EMAIL
git config --global user.name $GIT_NAME

# deploy
cd public
git init
git add .
git commit -m "Deploy to Github Pages"
git push --force --quiet "https://${GH_TOKEN}@$github.com/${GITHUB_REPO}.git" master:gh-pages > /dev/null 2>&1


echo "Done updating gh-pages\n"

else
 echo "Skipped updating gh-pages, because build is not triggered from the master branch!"
fi;