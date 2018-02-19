import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWeather, fetchForecast, fetchLocation } from '../actions';
import WeatherCity from "../components/WeatherCity";
import WeatherCondition from "../components/WeatherCondition";
import WeatherTemp from "../components/WeatherTemp";
import Loading from "../components/Loading";


class WeatherList extends Component {

  componentWillMount(){
    this.props.fetchLocation()
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.props.location !== nextProps.location) {
      const { latitude, longitude } = nextProps.location.data;
      this.updateWeather(`lat=${latitude}&lon=${longitude}`);
    }
  }

  updateWeather(params) {
    this.props.dispatch(fetchWeather(params));
    this.props.dispatch(fetchForecast(params));
  }


  render() {
    const { isFetching, weather } = this.props;
    console.log(weather);
    if (weather.error) {
      return <p>Please try again: {weather.error}</p>;
    }

    if (weather.current) {
      return (
        <div key={weather.current.name}>
          <div className="container text-white text-center">
            <WeatherCity city={weather.current.name} />
            <WeatherTemp temp={weather.current.main.temp} />
            <WeatherCondition conditions={weather.current.weather} />
          </div>
        </div>
      );
    }

    return <div />;
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather
  };
}

export default connect(mapStateToProps, {fetchLocation})(WeatherList);
