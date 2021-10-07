# GitHub portfolio app

Application for searching GitHub users and showcasing their repositories.

## Running the application

Move to the **client** directory under **github-portfolio-app**.

```bash
cd client
```

Use npm to install the dependencies.

```bash
npm install
```

Start the application.

```bash
npm start
```

App is ran at http://localhost:3000

## Authentication

GitHub REST API requires for authethication in order to send more reasonable amount of requests. In order to have the requests working properly, **.env** file with **AUTH= _*insert personal access token*_** needs to be created in the **client** folder with valid access token from GitHub.

Working example of the app can be found online at https://github-portfolio-apphe.herokuapp.com/

## Usage

Type wanted username into the search bar and click **Search** to show the user and their repositories.

Currently the username has to be written correctly to show results.

If user is not found, the view does not update and error message will be shown in the console. Error message could be developed in the future.

## References

Data provided by using GitHub REST API.

