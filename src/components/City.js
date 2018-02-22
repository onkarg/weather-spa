import React from 'react';
import PropTypes from 'prop-types';
 
const City = ({ onClick, city }) => (
  <li onClick={onClick}>
    {city}
  </li>
)
 
City.propTypes = {
  onClick: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
}
 
export default City