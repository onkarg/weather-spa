import axios from "axios";
import { weatherKey, googleKey } from "../../config";

const API_URL = "https://api.openweathermap.org/data/2.5";
const GEO_URL = "https://www.googleapis.com/geolocation/v1/geolocate?key=";

export const REQUEST_WEATHER = "REQUEST_WEATHER";
export const REQUEST_WEATHER_FAILURE = "REQUEST_WEATHER_FAILURE";
export const RECEIVE_WEATHER_SUCCESS = "RECEIVE_WEATHER_SUCCESS";

export const REQUEST_FORECAST = "REQUEST_FORECAST";
export const REQUEST_FORECAST_FAILURE = "REQUEST_FORECAST_FAILURE";
export const RECEIVE_FORECAST_SUCCESS = "RECEIVE_FORECAST_SUCCESS";

export const REQUEST_LOCATION = "REQUEST_LOCATION";
export const REQUEST_LOCATION_FAILURE = "REQUEST_LOCATION_FAILURE";
export const RECEIVE_LOCATION_SUCCESS = "RECEIVE_LOCATION_SUCCESS";

export const ADD_CITY = "ADD_CITY";
export const REMOVE_CITY = "REMOVE_CITY";

//requesting weather actions

export const requestWeather = () => {
  return {
    type: REQUEST_WEATHER
  };
};

export const requestWeatherFailure = error => {
  return {
    type: REQUEST_WEATHER_FAILURE,
    error
  };
};

export const receiveWeatherSuccess = data => {
  return {
    type: RECEIVE_WEATHER_SUCCESS,
    payload: {
      data
    }
  };
};

export const requestForecast = () => {
  return {
    type: REQUEST_FORECAST
  };
};

export const requestForecastFailure = error => {
  return {
    type: REQUEST_FORECAST_FAILURE,
    error
  };
};

export const receiveForecastSuccess = data => {
  return {
    type: RECEIVE_FORECAST_SUCCESS,
    payload: {
      data
    }
  };
};

export const requestLocation = () => {
  return {
    type: REQUEST_LOCATION
  };
};

export const receiveLocationSuccess = location => {
  return {
    type: RECEIVE_LOCATION_SUCCESS,
    payload: {
      location
    }
  };
};

export const requestLocationFailure = err => {
  return {
    type: REQUEST_LOCATION_FAILURE,
    payload: {
      err
    }
  };
};

// cities list actions

let nextCityId = 0;

export const addCity = text => {
  return {
    type: ADD_CITY,
    id: nextCityId++,
    text
  };
};

export const removeCity = id => {
  return {
    type: REMOVE_CITY,
    id
  };
};

export const fetchWeather = params => {
  const url = `${API_URL}/weather?appid=${weatherKey}&units=imperial&${params}`;

  return function(dispatch) {
    dispatch(requestWeather());

    axios
      .get(url)
      .then(response => response.data)
      .then(data => dispatch(receiveWeatherSuccess(data)))
      .catch(err => dispatch(requestWeatherFailure(err)));
  };
};

export const fetchForecast = params => {
  const url = `${API_URL}/forecast?appid=${weatherKey}&units=imperial&${params}`;

  return function(dispatch) {
    dispatch(requestForecast());

    axios
      .get(url)
      .then(response => response.data)
      .then(data => dispatch(receiveForecastSuccess(data)))
      .catch(err => dispatch(requestForecastFailure(err)));
  };
};

export const fetchLocation = () => {
  const url = `${GEO_URL}${googleKey}`;
  return function(dispatch) {
    dispatch(requestLocation());

    axios
      .get(url)
      .then(position => {
        const { latitude, longitude } = position.location;
        console.log(latitude);
        console.log(longitude);
      })
      .then((latitude, longitude) => dispatch(receiveLocationSuccess(latitude, longitude)))
      .catch(err => dispatch(requestLocationFailure(err)));
  };
};
