import axios from 'axios';
import { key as API_KEY } from '../../config'

const initialState = {
    forecast: [],
    weather: []
}

const WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;
const FORECAST_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


const FETCH_WEATHER = "FETCH_WEATHER";
const FETCH_FORECAST = "FETCH_FORECAST";

export function fetchWeather (city){
    const url = `${WEATHER_URL}&q=${city},us`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}

export function fetchForecast (city){
    const url = `${FORECAST_URL}&q=${city},us`;
    const request = axios.get(url);
    return {
        type: FETCH_FORECAST,
        payload: request
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