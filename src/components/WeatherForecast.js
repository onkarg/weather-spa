import React from 'react';
import PropTypes from 'prop-types';

const WeatherForecast = ({ forecast }) => <h2>{forecast}</h2>;

WeatherForecast.propTypes = {
	forecast: PropTypes.array.isRequired
};

export default WeatherForecast;