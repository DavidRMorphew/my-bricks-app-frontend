import "./App.css";
import { useEffect } from "react";
import { ConnectedProps, connect } from "react-redux";
import { fetchLegoSets } from "./actions/legoSetActions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import NotFoundErrorDisplay from "./components/NotFoundErrorDisplay";
import About from "./components/About";
import LegoSetsContainer from "./containers/LegoSetsContainer";

const connector = connect(null, { fetchLegoSets });
type PropsFromRedux = ConnectedProps<typeof connector>;

const App = ({ fetchLegoSets }: PropsFromRedux) => {
  useEffect(() => {
    fetchLegoSets();
  }, [fetchLegoSets]);

  return (
    <Router>
      <div className="App background-image">
        <header className="App-header">
          <h1 className="title">My Bricks</h1>
          <NavBar />
        </header>
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/lego_sets">
            <LegoSetsContainer />
          </Route>
          <Route path="" component={NotFoundErrorDisplay} />
        </Switch>
      </div>
    </Router>
  );
};

export default connect(null, { fetchLegoSets })(App);
