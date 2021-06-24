import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchLegoSets} from '../actions/legoSetActions'

class LegoSetsContainer extends Component{

    componentDidMount(){
        this.props.fetchLegoSets()
    }

    handleLegoSetLoading = () => {
        return (this.props.loading) ? <p>LOADING...</p> : <ul>{this.renderLegoListTest()}</ul>
    }

    renderLegoListTest = () => {
        const renderArray = this.props.legoSets.map((set, index) => <li key={set.id}>{index+1}.) {set.name}</li>)
        console.log(renderArray)
        return renderArray
    }

    render(){
        return(
            <div>
                <h1>Lego Sets!</h1>
                {this.handleLegoSetLoading()}
            </div>
        )
    }
}

export default connect(({legoSets, loading})=>({legoSets, loading}), {fetchLegoSets})(LegoSetsContainer)