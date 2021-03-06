import { ADD_CITY, REMOVE_CITY } from "../actions";

const cities = (state = [], action) => {
  switch (action.type) {
    case ADD_CITY:
      return [
        ...state,
        {
          id: action.id,
          city: action.text
        }
      ];
    case REMOVE_CITY:
      return state.filter(city => city.id !== action.id);
    default:
      return state;
  }
}

export default cities;