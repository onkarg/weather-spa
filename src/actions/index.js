import axios from 'axios';
import { key as API_KEY } from '../../config'

const API_URL = 'http://api.openweathermap.org/data/2.5';

export const REQUEST_WEATHER = "REQUEST_WEATHER"
export const REQUEST_WEATHER_FAILURE = "REQUEST_WEATHER_FAILURE";
export const RECEIVE_WEATHER_SUCCESS = "RECEIVE_WEATHER_SUCCESS";

export const REQUEST_FORECAST = "REQUEST_FORECAST"
export const REQUEST_FORECAST_FAILURE = "REQUEST_FORECAST_FAILURE";
export const RECEIVE_FORECAST_SUCCESS = "RECEIVE_FORECAST_SUCCESS";

export const REQUEST_LOCATION = 'REQUEST_LOCATION';
export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';


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

export function requestLocation() {
	return {
		type: REQUEST_LOCATION
	};
}

export function receiveLocation(location) {
	return {
		type: RECEIVE_LOCATION,
		payload: {
			location
		}
	};
}

export function fetchWeather (params){
    const url = `${API_URL}/weather?appid=${API_KEY}&units=imperial&${params}`;

    return function(dispatch) {
        dispatch(requestWeather());
    
        axios.get(url)
        .then(response => response.data)
        .then(data => dispatch(receiveWeatherSuccess(data)))
        .catch(err => dispatch(requestWeatherFailure(err)))
    };
}

export function fetchForecast (params){
    const url = `${API_URL}/forecast?appid=${API_KEY}&units=imperial&${params}`;

    return function(dispatch) {
        dispatch(requestForecast());
    
        axios.get(url)
        .then(response => response.data)
        .then(data => dispatch(receiveForecastSuccess(data)))
        .catch(err => dispatch(requestForecastFailure(err)))
    };
}

export function fetchLocation() {
	return function (dispatch) {
		
		if (navigator.geolocation) {			
			dispatch(requestLocation());
			navigator.geolocation.getCurrentPosition(success, error);
		} else {
			console.log('Location cannot be retrieved...');
		}

		function success(position) {
			const { latitude, longitude } = position.coords;
			dispatch(receiveLocation({ latitude, longitude }));
		}

		function error(error) {
			console.error(error);
		}
	}
}