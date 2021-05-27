# [https://path-shala.herokuapp.com/](https://path-shala.herokuapp.com/)

## How to deploy the project on Herokuapp.com
1. First of all download the Herokuapp cli on your machine.
2. Create an account on herokuapp.com and then login yourself through the Heroku-CLI.
3. Open the backend folder of this project in terminal & initialize git in the folder by using command `git init`.
4. Create your empty Herokuapp in the same folder in terminal by using command `heroku create YOUR_WEBPAGE_ID`. eg. -> YOUR_WEBPAGE_ID = path-shala.
5. Now update the /client/.env file by putting empty herokuapp webpage address to the REACT_APP_HOST variable.
6. Make build of your client side by command `npm run build` in client directory in terminal.
7. Copy all the content of /client/build & then paste that to the /backend/public folder.
8. Add `use.app(express.static('./public))` middleware to your server.js file of /backend.
9. Create a **procfile** file in /backend directory and put `web : node server.js` in it.
10. Now open your /backend directory in terminal and then use command `git add .` & `git commit -m "initial commit"`.
11. Now you can push your backend to the herokuapp.com by using command `git push heroku master`. 
12. Heroku will deploy the webpage on that empty herokuapp webpage address.
13. Hoila !!! Your webpage is now live on herokuapp. 