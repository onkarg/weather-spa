import React, { Component } from 'react';
import { fetchWeather, fetchForecast } from '../redux/reducer.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      term: ""
    }
    this.handleTerm = this.handleTerm.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  handleTerm(term){
    this.setState({
      term
    })
  }

  formSubmit(event){
    event.preventDefault();
    this.props.fetchWeather(this.state.term)
    this.setState({
        term: ''
    });
  }
  
  render() {
    console.log(this.state.term)
    return (
      <div>
        <form onSubmit={this.formSubmit}>
          <input placeholder="enter city here.."
          value={this.state.term}
          onChange={(e) => {this.handleTerm(e.target.value)}} />
          <span><button type="submit">Search</button></span>
        </form>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather, fetchForecast }, dispatch);
}

export default connect(null, mapDispatchToProps)(Search);
