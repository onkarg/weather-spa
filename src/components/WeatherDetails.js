import React from "react";
import PropTypes from "prop-types";

const WeatherDetails = ({ city, condition, temp, lowTemp, highTemp }) => (
  <div class="forecast-container">
    <div class="today forecast">
      <div className="forecast-content">
        <div className="location">{city}</div>
        {Object.keys(condition).map(key => {
          return <span key={key}>{condition[key].main}</span>;
        })}
        <div className="degree">
          <div className="num">
            {temp}
            <sup>o</sup>&nbsp;F
          </div>

          <span className="small-high-low">
            High: {` ${highTemp}`}
            <sup>o</sup>&nbsp;F
          </span>
          <span className="small-high-low">
            Low: {` ${lowTemp}`}
            <sup>o</sup>&nbsp;F
          </span>
        </div>
      </div>
    </div>
  </div>
);

WeatherDetails.propTypes = {
  city: PropTypes.string.isRequired,
  condition: PropTypes.array.isRequired,
  temp: PropTypes.number.isRequired,
  lowTemp: PropTypes.number.isRequired,
  highTemp: PropTypes.number.isRequired
};

export default WeatherDetails;
