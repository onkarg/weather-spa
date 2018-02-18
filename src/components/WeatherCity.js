import React from 'react';
import PropTypes from 'prop-types';

const WeatherCity = ({ city }) => <h2>{city}</h2>;

WeatherCity.propTypes = {
	city: PropTypes.string.isRequired
};

export default WeatherCity;
