import './App.css';
import React, {Component} from 'react';
import LegoSetsContainer from './containers/LegoSetsContainer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  
  render(){
  return (
      <div className="App">
        <Router>
        <Switch>
          <header className="App-header">
            <h1>My Bricks App</h1>
          </header>
            <LegoSetsContainer />
        </Switch>
        </Router>
      </div>
      );
  }
}

export default App;
