import React from 'react';
import PropTypes from 'prop-types';

const WeatherTemp = ({ temp }) => <h2>{temp}</h2>;

WeatherTemp.propTypes = {
	temp: PropTypes.number.isRequired
};

export default WeatherTemp;