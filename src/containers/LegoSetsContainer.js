import React, { Component } from 'react'
import { connect } from 'react-redux'

class LegoSetsContainer extends Component{
    render(){
        return(
            <div>
                <h1>Lego Sets!</h1>
            </div>
        )
    }
}

export default connect(({legoSets})=>({legoSets}))(LegoSetsContainer)