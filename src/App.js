import './App.css';
import React, {Component} from 'react';
import LegoSetsContainer from './containers/LegoSetsContainer'

class App extends Component {
  
  render(){
  return (
      <div className="App">
        <header className="App-header">
          My Bricks App
          <LegoSetsContainer />
        </header>
      </div>
      );
  }
}

export default App;
