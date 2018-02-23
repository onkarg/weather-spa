import React, { Component } from "react";
import { fetchWeather, fetchForecast, addCity } from "../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
    this.handleTerm = this.handleTerm.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  handleTerm(term) {
    this.setState({
      term
    });
  }

  formSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(`q=${this.state.term}`);
    this.props.fetchForecast(`q=${this.state.term}`);
    this.props.addCity(this.state.term.toUpperCase());
    this.setState({
      term: ""
    });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.formSubmit} className="find-location">
          <input
            type="text"
            placeholder="Please type city... Eg. Phoenix, Boston, Los Angeles"
            value={this.state.term}
            onChange={e => {
              this.handleTerm(e.target.value);
            }}
          />
          <input type="submit" value="Add City" />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather, fetchForecast, addCity }, dispatch);
}

export default connect(null, mapDispatchToProps)(Search);
