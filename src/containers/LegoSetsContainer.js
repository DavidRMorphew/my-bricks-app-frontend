import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchLegoSets} from '../actions/legoSetActions'

class LegoSetsContainer extends Component{

    componentDidMount(){
        this.props.fetchLegoSets()
    }

    handleLegoSetLoading = () => {
        return (this.props.loading) ? "LOADING..." : "LegoSet"
    }

    render(){
        return(
            <div>
                <h1>Lego Sets!</h1>
                <p>{this.handleLegoSetLoading()}</p>
            </div>
        )
    }
}

export default connect(({legoSets, loading})=>({legoSets, loading}), {fetchLegoSets})(LegoSetsContainer)