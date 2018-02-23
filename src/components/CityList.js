import React from "react";
import PropTypes from "prop-types";
import City from "./City";

const CityList = ({ cities, onCityClick, onRemoveClick }) => (
  <div className="list-group">
    {cities.map(city => (
      <div
        key={city.id}
        onClick={() => onCityClick(`q=${city.city},us`)}
        className="list-group-item list-group-item-action"
      >
        <City {...city} />

        <button
          className="btn btn-danger"
          onClick={() => onRemoveClick(city.id)}
        >
          Delete
        </button>
      </div>
    ))}
  </div>
);

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      city: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onCityClick: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired
};

export default CityList;
