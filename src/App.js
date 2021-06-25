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


class App extends Component {
  
  render(){
  return (
        <Router>
          <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route path ="/lego_sets">
              <LegoSetsContainer />
            </Route>
          </Switch>
        </Router>
      );
  }
}

export default App;
