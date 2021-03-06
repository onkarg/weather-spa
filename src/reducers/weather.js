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

const weather = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_WEATHER:
      return Object.assign({}, state, {
        isFetching: true
      });
    case REQUEST_WEATHER_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error.response.data.message
      });
    case RECEIVE_WEATHER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        current: action.payload.data
      });
    case REQUEST_FORECAST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case REQUEST_FORECAST_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error.response.data.message
      });
    case RECEIVE_FORECAST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        forecast: action.payload.data
      });
    default:
      return state;
  }
}

export default weather;