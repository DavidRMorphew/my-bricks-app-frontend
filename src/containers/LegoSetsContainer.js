import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchLegoSets} from '../actions/legoSetActions'

class LegoSetsContainer extends Component{

    componentDidMount(){
        this.props.fetchLegoSets()
    }

    render(){
        return(
            <div>
                <h1>Lego Sets!</h1>
            </div>
        )
    }
}

export default connect(({legoSets})=>({legoSets}), {fetchLegoSets})(LegoSetsContainer)