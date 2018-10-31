echo "Creating new Nodejs Project for idempotent ESLint Rule check"

mkdir temp_proj
cd temp_proj

npm init -y

echo "Installing latest Eslint in Temp project ...."
npm install --save-dev eslint

echo "Copying original Eslint File"
cp ../.eslintrc.json .
cp ../check.js .

echo "Checking current rules in latest version of ESLint"
node check.js

cd ..
rm -rf temp_proj
