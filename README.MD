# myBugdetBookV2

myBudgetBookV2 is designed to help keep track of your expenses, plan your budgets, and see where your spend the most money in pretty graphs.

## Front-End Development Environment

### Software to install

From internet

-   VS Code
-   iTerm

### Steps to setup environment

1. Clone this repository
1. Install Node packages: `npm install`
1. Setup browser
    1. Chrome (the only accepted browser)
        1. Add the following necessary extensions:
            - Web Developer
            - Web Developer Toolbar
            - React Developer Tools
            - Redux DevTools
1. Run `npm start`

## Steps to deploy application

- TDB

## Style Guides

We will be using the Airbnb style guide for our Javascript/React/JSX
styling: https://github.com/airbnb/javascript/tree/master/react

## Details

This project was bootstrapped with [Expo.io](https://expo.io).

### Libraries

| Library               | Docs                                                        | Purpose                                                                                   |
| --------------------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| React                 | https://reactjs.org/                                        | Javascript framework for single-page application                                      |

## Available Scripts

In the project directory, you can run:

### `npm start` - "react-native start"

It always freezes on me but it came out of the box so it stays for now. But one day...

### `start:local` - "expo start --offline --localhost --android"

Start the local server for expo in offline mode and make all connections for android go to localhost

"start:local": "expo start --offline --localhost --android",
"start:dev": "adb reverse tcp:8081 tcp:8081 && react-native run-android",
"start:android": "react-native run-android",
"start:ios": "react-native run-ios",
"start:web": "expo start --web",
"start": "react-native start",
"test": "jest",
"clear:cache": "rm -rf web-build ios android",
"clear:cacheWithModules": "rm -rf node_modules && npm run clear:cache"

### Notes

### TODO's

- [ ] - Finish this readme
