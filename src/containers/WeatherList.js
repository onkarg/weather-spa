import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWeather, fetchForecast, fetchLocation } from "../actions";
import Loading from "../components/Loading";
import WeatherDetails from "../components/WeatherDetails";

class WeatherList extends Component {
  
  componentDidMount(){
    const { latitude, longitude } = this.props.location.data;
    this.updateWeather(`lat=${latitude}&lon=${longitude}`);
  }
  
  componentWillUpdate(nextProps, nextState) {
    if (this.props.location !== nextProps.location) {
      console.log(nextProps.location.data)
      const { latitude, longitude } = nextProps.location.data;
      this.updateWeather(`lat=${latitude}&lon=${longitude}`);
    }
  }

  updateWeather(params) {
    this.props.fetchWeather(params);
  }

  render() {
    console.log(this.props);
    const { isFetching, isFetchingLocation, weather } = this.props;
    return (
      <div>
      {
        !weather.error ? (
          <p>Please try again: {weather.error}</p>
        ) : (
          <p>Loading...please wait</p>
        )
      }

      {
        isFetchingLocation ? (
          <p>Trying to get current location</p>
        ) : (
          <p>Loading...please wait</p>
        )
      }

      {
        weather.current ? (
          <WeatherDetails
            city={weather.current.name}
            condition={weather.current.weather}
            temp={weather.current.main.temp}
            lowTemp={weather.current.main.temp_min}
            highTemp={weather.current.main.temp_max}
          />
        ) : (
          <div />
        )
      }
      </div>
    )
  }
}


const mapStateToProps = state => {
  const { weather, location } = state;
  return {
    weather,
    location
  };
};

export default connect(mapStateToProps, {
  fetchLocation,
  fetchWeather,
  fetchForecast
})(WeatherList);
