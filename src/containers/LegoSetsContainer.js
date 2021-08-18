// import React, { Component } from 'react'
import { useState } from 'react'
import FilterInputComponent from '../components/FilterInputComponent'
import LegoSetCards from '../components/LegoSetCards'
import LegoSetShowContainer from './LegoSetShowContainer'
import PotentialBuildSelection from '../components/PotentialBuildSelection'
import PotentialBuildSetsResults from '../components/PotentialBuildSetsResults'
import {
    Switch,
    Route
  } from "react-router-dom";

const LegoSetsContainer = () => {
    
    // state = {
    //     filterTerm: ''
    // }

    const [filterTerm, setFilterTerm] = useState('')

    const handleFilterInputOnChange = e => {
        // this.setState({
        //     [e.target.name]: e.target.value
        // })
        setFilterTerm(e.target.value)
    }

    const handleFilterInputClearOnClick = e => {
        // this.setState({
        //     filterTerm: ''
        // })
        setFilterTerm('')
    }

    // render(){
        return(
            <Switch>
                <Route exact path="/lego_sets">
                    <FilterInputComponent 
                        handleOnChange={ handleFilterInputOnChange } 
                        handleOnClick={ handleFilterInputClearOnClick } 
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

    // }
}

export default LegoSetsContainer