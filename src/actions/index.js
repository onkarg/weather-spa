import axios from 'axios';
import { key as API_KEY } from '../../config'

const API_URL = 'http://api.openweathermap.org/data/2.5';

export const REQUEST_WEATHER = "REQUEST_WEATHER"
export const REQUEST_WEATHER_FAILURE = "REQUEST_WEATHER_FAILURE";
export const RECEIVE_WEATHER_SUCCESS = "RECEIVE_WEATHER_SUCCESS";

export const REQUEST_FORECAST = "REQUEST_FORECAST"
export const REQUEST_FORECAST_FAILURE = "REQUEST_FORECAST_FAILURE";
export const RECEIVE_FORECAST_SUCCESS = "RECEIVE_FORECAST_SUCCESS";


export function requestWeather(){
    return {
        type: REQUEST_WEATHER
    };
}

export function requestWeatherFailure(error){
    return {
        type: REQUEST_WEATHER_FAILURE,
        error
    }
}

export function receiveWeatherSuccess(data){
    return {
        type: RECEIVE_WEATHER_SUCCESS,
        payload: {
            data
        }
    };
}

export function requestForecast(){
    return {
        type: REQUEST_FORECAST
    };
}

export function requestForecastFailure(error){
    return {
        type: REQUEST_FORECAST_FAILURE,
        error
    }
}

export function receiveForecastSuccess(data){
    return {
        type: RECEIVE_FORECAST_SUCCESS,
        payload: {
            data
        }
    };
}

export function fetchWeather (params){
    const url = `${API_URL}/weather?appid=${API_KEY}&units=imperial&q=${params}`;

    return function(dispatch) {
        dispatch(requestWeather());
    
        axios.get(url)
        .then(response => response.data)
        .then(data => dispatch(receiveWeatherSuccess(data)))
        .catch(err => dispatch(requestWeatherFailure(err)))
    };
}

export function fetchForecast (params){
    const url = `${API_URL}/weather?appid=${API_KEY}&units=imperial&q=${params}`;

    return function(dispatch) {
        dispatch(requestForecast());
    
        axios.get(url)
        .then(response => response.data)
        .then(data => dispatch(receiveForecastSuccess(data)))
        .catch(err => dispatch(requestForecastFailure(err)))
    };
}