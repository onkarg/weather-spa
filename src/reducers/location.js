import {
  REQUEST_LOCATION,
  REQUEST_LOCATION_FAILURE,
  RECEIVE_LOCATION_SUCCESS
} from "../actions";

const initialState = {
  isFetchingLocation: true
};

const location = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_LOCATION:
      return Object.assign({}, state, {
        isFetchingLocation: true
      });
    case REQUEST_LOCATION_FAILURE:
      return Object.assign({}, state, {
        isFetchingLocation: false,
        error: action.error.response.data.message
      });
    case RECEIVE_LOCATION_SUCCESS:
      return Object.assign({}, state, {
        isFetchingLocation: false,
        data: action.payload.location
      });
    default:
      return state;
  }
};

export default location;
