import axios from 'axios';

const API_KEY = '8b23d49b8a98da201482ad7f9e6dba8b';

const WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;
const FORECAST_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


const FETCH_WEATHER = "FETCH_WEATHER";
const FETCH_FORECAST = "FETCH_FORECAST";

export function fetchWeather (city){
    const request = axios.get(`${WEATHER_URL}&q=${city},us`);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}

export function fetchForecast (city){
    const request = axios.get(`${FORECAST_URL}&q=${city},us`);
    return {
        type: FETCH_FORECAST,
        payload: request
    };
}

export default function reducer(state = [], action){
    switch(action.type){
        case FETCH_WEATHER:
            return [ action.payload.data, ...state ];
        default: 
            return state; 
    }
}