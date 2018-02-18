import axios from 'axios';
import { key as API_KEY } from '../../config'

const initialState = {
    forecast: [],
    weather: []
}

const API_URL = 'http://api.openweathermap.org/data/2.5';

const REQUEST_WEATHER = "REQUEST_WEATHER"
const RECEIVE_WEATHER_SUCCESS = "RECEIVE_WEATHER_SUCCESS";
const REQUEST_WEATHER_FAILURE = "REQUEST_WEATHER_FAILURE";

const REQUEST_FORECAST = "REQUEST_FORECAST"
const RECEIVE_FORECAST_SUCCESS = "RECEIVE_FORECAST_SUCCESS";
const REQUEST_FORECAST_FAILURE = "REQUEST_FORECAST_FAILURE";


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

export function receiveWeatherSuccess(json){
    return {
        type: RECEIVE_WEATHER_SUCCESS,
        payload: {
            json
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

export function receiveForecastSuccess(json){
    return {
        type: RECEIVE_FORECAST_SUCCESS,
        payload: {
            json
        }
    };
}

export function fetchWeather (params){
    const url = `${API_URL}/weather?appid=${API_KEY}&units=imperial&q=${param}`;

    return function(dispatch) {
        dispatch(requestWeather());
    
        return axios.get(url)
        .then(response => response.json())
        .then(json => dispatch(receiveWeatherSuccess(json)))
        .catch(err => dispatch(requestWeatherFailure(err.toString())))
    };
}

export function fetchForecast (params){
    const url = `${API_URL}/weather?appid=${API_KEY}&units=imperial&q=${param}`;

    return function(dispatch) {
        dispatch(requestForecast());
    
        return axios.get(url)
        .then(response => response.json())
        .then(json => dispatch(receiveForecastSuccess(json)))
        .catch(err => dispatch(requestForecastFailure(err.toString())))
    };
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case FETCH_WEATHER:
            return Object.assign({}, state, {weather: action.payload.data})
        case FETCH_FORECAST:
            return Object.assign({}, state, {forecast: action.payload.data})
        default: 
            return state; 
    }
}