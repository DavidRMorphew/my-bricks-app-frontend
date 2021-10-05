import './App.css';
import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchLegoSets } from './actions/legoSetActions'
import { logOutUser, alreadyLoggedInCheck } from './actions/userActions'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar'
import NotFoundErrorDisplay from './components/NotFoundErrorDisplay';
import About from './components/About'
import LegoSetsContainer from './containers/LegoSetsContainer'
import Register from './components/Register'
import Login from './components/Login'

const App = ({ fetchLegoSets, user, logOutUser, alreadyLoggedInCheck }) => {

  useEffect(()=>{ fetchLegoSets() }, [fetchLegoSets])

  useEffect(() => { alreadyLoggedInCheck() }, [])

  const loggedIn = JSON.stringify(user) !== "{}" ? true : false

  return (
    <Router>
      {console.log(loggedIn)}
        <div className="App background-image" alt="Image of a pile of colored bricks as a background">
            <header className="App-header">
              <h1 className="title">My Bricks</h1>
              <NavBar/>
              { loggedIn ? <button onClick={logOutUser}>Log Out</button> : null}
            </header>
            <Switch>
              <Route exact path="/">
                <About />
              </Route>
              <Route path ="/lego_sets">
                <LegoSetsContainer />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="" component={NotFoundErrorDisplay}/>
            </Switch>
        </div>
    </Router>
    )
}

export default connect(({ user }) => ({ user }), { fetchLegoSets, logOutUser, alreadyLoggedInCheck })(App);
