import React, { Component } from "react";
import Search from './containers/Search';
import WeatherList from './containers/WeatherList';

class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <WeatherList />
      </div>
    );
  }
}

export default App;
