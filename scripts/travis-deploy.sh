#!/bin/bash

set -e # exit with nonzero exit code if anything fails

if [[ $TRAVIS_BRANCH == "master" && $TRAVIS_PULL_REQUEST == "false" ]]; then

echo "Starting to update gh-pages\n"

git config --global user.email $GH_EMAIL
git config --global user.name $GH_NAME
remote=$(git config remote.origin.url)
git clone $remote

cd landing-page-book

git checkout --orphan gh-pages

git rm -rf --cached . &&
sudo npm update -g npm@latest &&
npm install &&
npm run eslint &&
npm run test -- -u &&
npm run build-storybook &&  

find . | grep -v "public" | grep -v ".git"| grep -v "."| grep -v ".." | xargs rm -rf &&

mv public/* . &&

rm -rf public &&

git add -A .
git commit -m "Travis build $TRAVIS_BUILD_NUMBER"

git push --force --quiet origin gh-pages

echo "Done updating gh-pages\n"

else
 echo "Skipped updating gh-pages, because build is not triggered from the master branch."
fi;