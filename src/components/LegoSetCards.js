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
                <h1 className="over-background">Lego Sets: {this.props.legoSets.length}</h1>
                    {this.handleLegoSetLoading()}
        </Container>
    )
    }
}

const mapStateToProps = (state, ownProps) => {
    const {legoSets, loading} = state

    // const results = (!ownProps.filterTerm) ? legoSets : legoSets.filter(set => {
    //     const regex = new RegExp(ownProps.filterTerm, 'i')
    //     return (regex.test(set.name) || regex.test(set.themeName) || regex.test(set.setNumber))
    // })
    let results
    switch (true){
        case (!!ownProps.filterTerm):
            results = legoSets.filter(set => {
                const regex = new RegExp(ownProps.filterTerm, 'i')
                return (regex.test(set.name) || regex.test(set.themeName) || regex.test(set.setNumber))
            })
            break;
        case (!!ownProps.subSetTerm):
            results = legoSets.filter(set => !!set.owned)
            break;
        default:
            results = legoSets
    }

    return {
        legoSets: results,
        loading
    }
}

export default connect(mapStateToProps,{ fetchLegoSets })(LegoSetCards)