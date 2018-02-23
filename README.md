# Overview

SPA with focus on key features:

1) User should be able to add/remove cities
2) Data should be available in history(even after user hits refresh)
3) Use geolocation to automatically detect weather

## Tech Stack
- `react` framework
- `redux` to manage state
- `redux-persist` to persist and rehydrate a redux store
- `openweathermapapi` to request weather data
- `bootstrap` for ui
- `webpack` to bundle js
- `babel` to use ES6

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/onkarg/weather-spa.git
> cd weather-spa
> npm install
> npm start
```

#### Not Familiar with Git?
Click [here](https://github.com/onkarg/weather-spa.git) then click `Clone or Download` button.

Click `Download ZIP`

Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> npm install
> npm start
> project hosted at http://localhost:8080/
```