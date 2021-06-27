import './App.css';
import React, {Component} from 'react';
import LegoSetsContainer from './containers/LegoSetsContainer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About'
import NavBar from './components/NavBar'
import { connect } from 'react-redux'
import { fetchLegoSets } from './actions/legoSetActions'
import NotFoundErrorDisplay from './components/NotFoundErrorDisplay';

class App extends Component {

  componentDidMount(){
    this.props.fetchLegoSets()
}

  render(){
  return (
      <Router>
          <div className="App">
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
