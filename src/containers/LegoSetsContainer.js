import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { fetchLegoSets } from '../actions/legoSetActions'
// import LegoSetCard from '../components/LegoSetCard'
// import Container from 'react-bootstrap/Container'
// import CardDeck from 'react-bootstrap/CardDeck'
import FilterInputComponent from '../components/FilterInputComponent'
import LegoSetCards from '../components/LegoSetCards'
import LegoSetShowContainer from './LegoSetShowContainer'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

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

    // render(){
    //     return(
    //         <div>
    //             <FilterInputComponent 
    //                 handleOnChange={this.handleFilterInputOnChange} 
    //                 handleOnClick={this.handleFilterInputOnClick} 
    //                 value={this.state.filterTerm}
    //             />
    //             <LegoSetCards filterTerm={this.state.filterTerm}/>
    //         </div>
    //     )
    // }

    render(){
        return(
            <Switch>
                <Route exact path="/lego_sets">
                    <FilterInputComponent 
                        handleOnChange={this.handleFilterInputOnChange} 
                        handleOnClick={this.handleFilterInputOnClick} 
                        value={this.state.filterTerm}
                    />
                    <LegoSetCards filterTerm={this.state.filterTerm}/>
                </Route>
                <Route exact path="/lego_sets/owned">
                    <LegoSetCards subSetTerm={"owned"}/>
                </Route>
                <Route exact path="/lego_sets/potential_builds">
                    
                </Route>
                <Route path="/lego_sets/:id" component={routeInfo => <LegoSetShowContainer routeInfo={routeInfo} />}/>
            </Switch>
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
export default LegoSetsContainer