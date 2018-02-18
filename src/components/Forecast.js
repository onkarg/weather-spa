import React, { Component } from 'react';
import { connect } from 'react-redux';

class Forecast extends Component {

    render (){


        return(
            <div>

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