import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWeather, fetchForecast, fetchLocation } from "../actions";
import Loading from "../components/Loading";
import WeatherDetails from "../components/WeatherDetails";

class WeatherList extends Component {
  componentWillUpdate(nextProps, nextState) {
    if (this.props.location !== nextProps.location) {
      const { latitude, longitude } = nextProps.location.data;
      this.updateWeather(`lat=${latitude}&lon=${longitude}`);
    }
  }

  updateWeather(params) {
    this.props.fetchWeather(params);
    this.props.fetchForecast(params);
  }

  render() {
    console.log(this.props);
    const { isFetching, weather } = this.props;
    if (weather.error) {
      return <p>Please try again: {weather.error}</p>;
    }

    if (weather.current) {
      return (
        <WeatherDetails
          city={weather.current.name}
          condition={weather.current.weather}
          temp={weather.current.main.temp}
          lowTemp={weather.current.main.temp_min}
          highTemp={weather.current.main.temp_max}
        />
      );
    }

    return <div />;
  }
}

const mapStateToProps = (state) => {
  const { weather, location } = state;
  return {
    weather,
    location
  };
}

export default connect(mapStateToProps, {
  fetchLocation,
  fetchWeather,
  fetchForecast
})(WeatherList);
