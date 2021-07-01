import React, { Component } from 'react'
import FilterInputComponent from '../components/FilterInputComponent'
import LegoSetCards from '../components/LegoSetCards'
import LegoSetShowContainer from './LegoSetShowContainer'
import PotentialBuildSelection from '../components/PotentialBuildSelection'
import PotentialBuildSetsResults from '../components/PotentialBuildSetsResults'
import {
    Switch,
    Route
  } from "react-router-dom";

class LegoSetsContainer extends Component{
    
    state = {
        filterTerm: ''
    }

    handleFilterInputOnChange = e => {
        const inputKey = e.target.name
        const inputValue = e.target.value
        this.setState({
            [inputKey]: inputValue
        })
    }

    handleFilterInputClearOnClick = e => {
        this.setState({
            filterTerm: ''
        })
    }

    render(){
        const { filterTerm } = this.state
        return(
            <Switch>
                <Route exact path="/lego_sets">
                    <FilterInputComponent 
                        handleOnChange={ this.handleFilterInputOnChange } 
                        handleOnClick={ this.handleFilterInputClearOnClick } 
                        value={ filterTerm }
                    />
                    <LegoSetCards filterTerm={ filterTerm }/>
                </Route>
                <Route exact path="/lego_sets/owned">
                    <LegoSetCards subSetTerm={ "owned" }/>
                </Route>
                <Route exact path="/lego_sets/potential_builds">
                     <PotentialBuildSelection />
                     <PotentialBuildSetsResults />
                </Route>
                <Route path="/lego_sets/:id" component={ routeInfo => <LegoSetShowContainer routeInfo={ routeInfo } /> }/>
            </Switch>
        )

    }
}

export default LegoSetsContainer