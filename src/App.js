import React, { Component } from "react";
import { fetchWeather, fetchForecast } from "./redux/reducer";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            placeholder="enter city here.."
            value={this.state.term}
            onChange={e => {
              this.handleTerm(e.target.value);
            }}
          />
        </form>
      </div>
    );
  }
}

export default App;
