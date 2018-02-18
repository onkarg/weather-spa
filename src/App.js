import React, { Component } from "react";
import Search from './components/Search';
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div>
        <Search />
      </div>
    );
  }
}

export default App;
