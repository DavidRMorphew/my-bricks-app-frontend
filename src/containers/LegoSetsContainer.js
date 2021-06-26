import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLegoSets } from '../actions/legoSetActions'
// import LegoSetCard from '../components/LegoSetCard'
// import Container from 'react-bootstrap/Container'
// import CardDeck from 'react-bootstrap/CardDeck'
import LegoSetCards from '../components/LegoSetCards'


class LegoSetsContainer extends Component{

    componentDidMount(){
        this.props.fetchLegoSets()
    }

    // handleLegoSetLoading = () => {
    //     return (this.props.loading) ? <h4 className="over-background">LOADING...</h4> : <CardDeck>{this.renderLegoSetCards()}</CardDeck>
    // }

    // renderLegoSetCards = () => (
    //     this.props.legoSets.map(set => <LegoSetCard key={set.id} legoSet={set}/>)
    // )

    // render(){
    //     return(
    //         <Container fluid className="container">
    //             <h1 className="over-background">Lego Sets!</h1>
    //                 {this.handleLegoSetLoading()}
    //         </Container>
    //     )
    // }
    render(){
        const {legoSets, loading} = this.props
        return(
            <LegoSetCards legoSets={legoSets} loading={loading}/>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps)
    const {legoSets, loading} = state
    return {
        legoSets,
        loading
    }
}
export default connect(mapStateToProps, {fetchLegoSets})(LegoSetsContainer)