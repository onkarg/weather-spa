import React, { Component } from "react";
import { connect } from "react-redux";

class Weather extends Component {

  
    render() {
      const { isFetching, weather, forecast } = this.props;
      console.log(weather)
      if(weather.error){
        return (
          <p>There was an error: {weather.error}</p>
        );
      }

      if(!weather.weather || !weather.forecast || !isFetching){
        return (
          <p>Loading...</p>
        );
      }
    return (
      <div>
        {weather}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { weather, forecast } = state;
  return {
    weather,
    forecast
  };
}

export default connect(mapStateToProps)(Weather);
