import React, { Component } from 'react'
import LegoSetCard from '../components/LegoSetCard'
import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'
import { connect } from 'react-redux'
import { fetchLegoSets } from '../actions/legoSetActions'

class LegoSetCards extends Component {

    componentDidMount(){
        this.props.fetchLegoSets()
    }
    
    handleLegoSetLoading = () => {
        return (this.props.loading) ? <h4 className="over-background">LOADING...</h4> : <CardDeck>{this.renderLegoSetCards()}</CardDeck>
    }

    renderLegoSetCards = () => (
        this.props.legoSets.map(set => <LegoSetCard key={set.id} legoSet={set}/>)
    )
    render(){
    return(
        <Container fluid className="container">
                <h1 className="over-background">Lego Sets!</h1>
                    {this.handleLegoSetLoading()}
        </Container>
    )
    }
}

const mapStateToProps = (state, ownProps) => {
    const {legoSets, loading} = state
    console.log(!ownProps.filterTerm)
    const results = legoSets.filter(set => {

        console.log(set.name.search(ownProps.filterTerm))
        return set.name.search(ownProps.filterTerm) !== ''
})
    console.log(results)
    return {
        legoSets: legoSets,
        loading
    }
}

export default connect(mapStateToProps,{ fetchLegoSets })(LegoSetCards)