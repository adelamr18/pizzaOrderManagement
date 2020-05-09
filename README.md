### `To run the backend server locally please follow these steps`:

1-Open the command line then type node server.js

### `Steps concerning Heroku deployment`:

1-Create a root folder in the client application named:client and copy backend files to client repo so the structure will be as follows:
assets
client
build
public
src
client application files etc
package.json
tsconfig.json
config
controllers
routes
.env
package.json
server.js

2-Add process.env.MONGODB_URI as a input to connectDB function

3-Navigate to client folder by typing cd client then type npm run build

4-Include this check inside of server.js:
if (process.env.NODE_ENV === "production") {
app.use(express.static("client/build"));
}

5-Add these commands to backend package.json under the scripts object:
"build": "cd client && npm run build",
"install-client": "cd client && npm install",
"heroku-postbuild": "cd client && npm install --only=dev && npm install && npm run build "

6- Install Heroku cli on machine

7- Include NODE_ENV="production" as an environment variable in .env file

8- Navigate back to backend root then type in terminal:
heroku create anynameyouwant
heroku addons:create mongolab:sandbox
git init
git add .
git commit "Your commit message"
Login to Heroku then get repo link for the project it will be something like this:
heroku git:remote -a pizzaordermanagement
git push heroku master
then a url will be generated in the terminal and by opening this url it will contain the deployed application and the url will look something like this:
https://pizzaordermanagement.herokuapp.com/
