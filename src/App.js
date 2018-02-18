import React, { Component } from "react";
import Search from './components/Search';
import Weather from './components/Weather';
import Forecast from './components/Forecast';

class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <Weather />
        <Forecast />
      </div>
    );
  }
}

export default App;
