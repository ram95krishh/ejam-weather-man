echo "Step #1 - Cloning the repo..."
echo "............................................"
git clone https://github.com/ram95krishh/ejam-weather-man.git
cd ejam-weather-man

echo "Step #2 - Creating .env file..."
echo "............................................"
cp ../env ./.env

echo "Step #3 - Installing necessary dependencies..."
echo "............................................"
npm i

echo "Step #4 - Building the project..."
echo "............................................"
npm run build:dev
#change above command to npm run build for production build

echo "Step #5 - Starting the app on Port 8080..."
echo "............................................"
npm start