import React, { Component } from "react";
import Search from './containers/Search';
import WeatherList from './containers/WeatherList';
import CitiesList from './containers/CitiesList';

class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <WeatherList />
        <CitiesList />
      </div>
    );
  }
}

export default App;
