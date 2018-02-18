import React, { Component } from "react";
import { connect } from "react-redux";
import WeatherCity from '../components/WeatherCity';
import WeatherCondition from '../components/WeatherCondition';
import WeatherTemp from '../components/WeatherTemp';

class WeatherList extends Component {
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
    console.log(weather)
		if (weather.error) {
			return (
				<p>Failed to get data: {weather.error}</p>
			);
		}

		if (!weather.current || !weather.forecast || isFetching) {
			return (
				<p>Loading... Please Wait</p>
			);
		}

		return (
			<div>
				<WeatherCity city={weather.current.name} />
				<WeatherTemp temp={weather.current.main.temp} />
				<WeatherCondition conditions={weather.current.weather} />
			</div>
		);
	}
}

function mapStateToProps(state) {
  return {
    weather: state.weather
  };
}

export default connect(mapStateToProps)(WeatherList);
