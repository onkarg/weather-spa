import {
  REQUEST_WEATHER,
  REQUEST_WEATHER_FAILURE,
  RECEIVE_WEATHER_SUCCESS,
  REQUEST_FORECAST,
  REQUEST_FORECAST_FAILURE,
  RECEIVE_FORECAST_SUCCESS
} from "../actions";

const initialState = {
  isFetching: true
};

export default function weather(state = initialState, action) {
  switch (action.type) {
    case REQUEST_WEATHER:
      return Object.assign({}, state, {
        isFetching: true
      });
    case REQUEST_WEATHER_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      });
    case RECEIVE_WEATHER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        weather: action.payload.json
      });
    case REQUEST_FORECAST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case REQUEST_FORECAST_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      });
    case RECEIVE_FORECAST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        forecast: action.payload.json
      });
    default:
      return state;
  }
}