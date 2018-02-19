import React from 'react';
import PropTypes from 'prop-types';

const WeatherCondition = ({ conditions }) =>
	<div>
		{Object.keys(conditions).map((key) => {
			return <span key={key}><h1>{conditions[key].main}</h1></span>
		})}
	</div>

WeatherCondition.propTypes = {
	conditions: PropTypes.array.isRequired
};

export default WeatherCondition;