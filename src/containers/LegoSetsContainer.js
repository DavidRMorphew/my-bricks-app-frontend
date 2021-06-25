import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLegoSets } from '../actions/legoSetActions'
import LegoSetCard from '../components/LegoSetCard'
import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'

class LegoSetsContainer extends Component{

    componentDidMount(){
        this.props.fetchLegoSets()
    }

    handleLegoSetLoading = () => {
        return (this.props.loading) ? <p>LOADING...</p> : <CardDeck>{this.renderLegoSetCards()}</CardDeck>
    }

    // renderLegoListTest = () => {
    //     const renderArray = this.props.legoSets.map((set, index) => (<li key={set.id}><p>{index+1}.) {set.name}</p><img src={set.imageUrl}/></li>))
    //     console.log(renderArray)
    //     return renderArray
    // }

    renderLegoSetCards = () => (
        this.props.legoSets.map(set => <LegoSetCard key={set.id} legoSet={set}/>)
    )

    render(){
        return(
            <Container fluid className="container">
                <h1>Lego Sets!</h1>
                    {this.handleLegoSetLoading()}
            </Container>
        )
    }
}

export default connect(({legoSets, loading})=>({legoSets, loading}), {fetchLegoSets})(LegoSetsContainer)