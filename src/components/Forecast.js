import React, { Component } from 'react';
import { connect } from 'react-redux';

class Forecast extends Component {

    render (){

        let props = this.props.forecast;
        return(
            <div>
                {props}
            </div>
        )
    }
}

function mapStateToProps({forecast}){
    return {
        forecast
    }
}

export default connect(mapStateToProps)(Forecast);