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
      <header className="masthead text-center">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <h1 className="mb-5">
                WEATHER
              </h1>
            </div>
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
              <form onSubmit={this.formSubmit}>
                <div className="form-row">
                  <div className="col-12 col-md-9 mb-2 mb-md-0">
                    <input
                      className="form-control form-control-lg"
                      placeholder="Enter your city..."
                      value={this.state.term}
                      onChange={e => {
                        this.handleTerm(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-12 col-md-3">
                    <button
                      type="submit"
                      className="btn btn-block btn-lg btn-primary"
                    >
                      Add City
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather, fetchForecast, addCity }, dispatch);
}

export default connect(null, mapDispatchToProps)(Search);
