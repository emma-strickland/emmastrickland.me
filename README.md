# emmastrickland.me

This is my personal website that that has Email, Linkedin, and Github links, as well as what I'm currently listening to on Spotify. The app is built with React and the server accesses the Last.fm API to show the most recently played track & artist. 


## Usage

TODO: list how to install/start/setup server/frontend and env file(s).

1.  Install nodemon globally, otherwise `yarn backend:start` will fail.
    ```
    npm install -g nodemon
    ```
# App
2. To access the app locally, run: 
    ```
    yarn frontend:start
    ```
3. To access the app on Github Pages, run:
    ```
    yarn frontend:build
    ```
# API
4. To access the server locally, run:
    ```
    yarn backend:start
    ```
5. To access the server on Heroku, run:
   ```
   yarn backend:build
   ```
# .env

6. Create a .env file in the api folder to store your API key(s). 
    ```
    EXAMPLE_API_KEY=apikey
    ```
7. Add .env to the .gitignore file. 
8. In the server.js file, replace the api key(s) in the axios.get request with ${process.env.EXAMPLE_API_KEY}.
9. Add dotenv to your api. 
    ``` 
    yarn add dotenv --save
    ```
10. Add this line to the server.js file:
    ```
    dotenv.config()
    ```

