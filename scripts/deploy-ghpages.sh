#!/bin/sh
# ideas used from https://gist.github.com/motemen/8595451

# abort the script if there is a non-zero error
set -e

# show where we are on the machine
#pwd

#remote=$(git config remote.origin.url)
#CIRCLE_REPOSITORY_URL="git@github.com:front10/landing-page-book.git"
#GH_EMAIL="systems@front10.com"
#GH_NAME="front10-circleci"
#TARGET_BRANCH="gh-pages"

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
git commit -m "Automated deployment to GitHub Pages" --allow-empty

git push --force --quiet origin gh-pages

echo "gh-pages deployed"
          