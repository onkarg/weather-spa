import React from "react";
import PropTypes from "prop-types";
import City from "./City";

const CityList = ({ cities, onCityClick, onRemoveClick }) => (
  <ul>
    {cities.map(city => (

        <div key={city.id}>
            <City {...city} onClick={() => onCityClick(`q=${city.city},us`)} />
            <button onClick={() => onRemoveClick(city.id)}>X</button>
        </div>
    ))}
  </ul>
);

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      city: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onCityClick: PropTypes.func.isRequired
};

export default CityList;
