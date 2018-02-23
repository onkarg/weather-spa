import React from "react";
import PropTypes from "prop-types";

const City = ({ city }) => <div>{city}</div>;

City.propTypes = {
  city: PropTypes.string.isRequired
};
export default City;
