import React, { Component } from "react";
import Search from './components/Search';
import { connect } from 'react-redux';


class App extends Component {
  render() {
    console.log(this.props.weather)
    return (
      <div>
        <Search />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps)(App);
