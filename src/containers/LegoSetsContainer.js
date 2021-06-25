import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLegoSets } from '../actions/legoSetActions'
import LegoSetCard from '../components/LegoSetCard'

class LegoSetsContainer extends Component{

    componentDidMount(){
        this.props.fetchLegoSets()
    }

    handleLegoSetLoading = () => {
        return (this.props.loading) ? <p>LOADING...</p> : <div>{this.renderLegoSetCards()}</div>
    }

    // renderLegoListTest = () => {
    //     const renderArray = this.props.legoSets.map((set, index) => (<li key={set.id}><p>{index+1}.) {set.name}</p><img src={set.imageUrl}/></li>))
    //     console.log(renderArray)
    //     return renderArray
    // }

    renderLegoSetCards = () => (
        this.props.legoSets.map(set => <div key={set.id}><LegoSetCard legoSet={set}/></div>)
    )

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