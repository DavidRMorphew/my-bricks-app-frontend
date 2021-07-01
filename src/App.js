import './App.css';
import React, {Component} from 'react';
import { connect } from 'react-redux'
import { fetchLegoSets } from './actions/legoSetActions'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar'
import NotFoundErrorDisplay from './components/NotFoundErrorDisplay';
import About from './components/About'
import LegoSetsContainer from './containers/LegoSetsContainer'

class App extends Component {

  componentDidMount(){
    this.props.fetchLegoSets()
  }

  render(){
  return (
      <Router>
          <div className="App" alt="Image of a pile of colored bricks as a background">
              <header className="App-header">
                <h1>My Bricks</h1>
                <NavBar/>
              </header>
              
              <Switch>
                <Route exact path="/">
                  <About />
                </Route>
                <Route path ="/lego_sets">
                  <LegoSetsContainer />
                </Route>
                <Route path="" component={NotFoundErrorDisplay}/>
              </Switch>
          </div>
      </Router>
      );
  }
}

export default connect(null, {fetchLegoSets})(App);
