import React from 'react';
import PropTypes from 'prop-types';

const WeatherCondition = ({ conditions }) =>
	<div>
		{Object.keys(conditions).map((key) => {
			return <span key={key}>{conditions[key].main}</span>
		})}
	</div>

WeatherCondition.propTypes = {
	conditions: PropTypes.array.isRequired
};

export default WeatherCondition;