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

There are two methods for getting started with this repo, before you start with these methods please aquire yourself an API key from [OpenWeatherMap](https://openweathermap.org/)


#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/onkarg/weather-spa.git
> cd weather-spa
> touch config.js and open the file
> add     module.exports = {key: 'your api key goes here' }     in the file and save
> add config.js in your gitignore file
> npm install
> npm start
```

#### Not Familiar with Git?
Click the green `Clone or Download` button above

Click `Download ZIP`

Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
>> create config.js in root of the weather-spa directory
> add     module.exports = {key: 'your api key goes here' }     in the file and save
> add config.js in your gitignore file
> npm install
> npm start
> project hosted at http://localhost:8080/
```
