import { connect } from "react-redux";
import { fetchWeather, removeCity } from "../actions";
import CityList from "../components/CityList";

const mapStateToProps = state => {
  const { cities } = state;
  return {
    cities
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCityClick: city => {
      dispatch(fetchWeather(city));
    },
    onRemoveClick: id => {
      dispatch(removeCity(id));
    }
  };
};
const CitiesList = connect(mapStateToProps, mapDispatchToProps)(CityList);
export default CitiesList;
