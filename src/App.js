import React, { Component } from "react";
import Search from "./containers/Search";
import WeatherList from "./containers/WeatherList";
import CitiesList from "./containers/CitiesList";
import Header from "./containers/Header";

class App extends Component {
  render() {
    return (
      <div className="site-content">
        <div className="site-header">
          <div className="container">
            <div className="logo-type">
              <h1 className="site-title">Weatherify</h1>
              <small className="site-description">
                Your daily weather source!
              </small>
            </div>
          </div>
        </div>

        <div className="hero">
          <Search />
        </div>
        <div className="forecast-table">
          <div className="container">
            <WeatherList />
          </div>
        </div>
        <div className="forecast-table">
          <div className="container">
            <CitiesList />
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
