import { combineReducers } from "redux";
import weather from "./weather";
import location from "./location";
import cities from "./cities";

const rootReducer = combineReducers({
  weather,
  location,
  cities
});

export default rootReducer;
