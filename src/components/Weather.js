import React, { Component } from "react";
import { connect } from "react-redux";

class Weather extends Component {

  
    render() {

    return (
      <div>

      </div>
    );
  }
}

function mapStateToProps({ weather }) {
  return {
    weather
  };
}

export default connect(mapStateToProps)(Weather);
