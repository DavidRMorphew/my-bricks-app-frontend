import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLegoSets } from '../actions/legoSetActions'
// import LegoSetCard from '../components/LegoSetCard'
// import Container from 'react-bootstrap/Container'
// import CardDeck from 'react-bootstrap/CardDeck'
import FilterInputComponent from '../components/FilterInputComponent'
import LegoSetCards from '../components/LegoSetCards'


class LegoSetsContainer extends Component{

    // componentDidMount(){
    //     this.props.fetchLegoSets()
    // }

    state = {
        filterTerm: ''
    }

    handleFilterInputOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleFilterInputOnClick = e => {
        e.preventDefault()
        this.setState({
            filterTerm: ''
        })
    }

    render(){
        const {filterTerm} = this.props
        return(
            <div>
                <FilterInputComponent 
                    handleOnChange={this.handleFilterInputOnChange} 
                    handleOnClick={this.handleFilterInputOnClick} 
                    value={this.state.filterTerm}
                />
                <LegoSetCards filterTerm={this.state.filterTerm}/>
            </div>
        )
    }
}

// const mapStateToProps = (state, ownProps) => {
//     console.log(ownProps)
//     const {legoSets, loading} = state
//     return {
//         legoSets,
//         loading
//     }
// }
export default connect(null, {fetchLegoSets})(LegoSetsContainer)