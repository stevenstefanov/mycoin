import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Three from "./Utils/Three.js";
import Chart from "./Utils/charts";
import AddAsset from "./components/AddAsset";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Coin from "./components/Rankings";
import News from "./components/News";
import "./App.css";
import "./assets/css/style.css";

function App() {
  const [assets, setAssets] = useState([]);

  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/">
            <Three></Three>
          </Route>

          <Nav />
          <Route exact path="/home">
            <AddAsset />
          </Route>

          <Route exact path="/portfolio">
            <Portfolio assets={assets} />
            <Chart />
          </Route>

          <Route exact path="/rankings">
            <Coin />
          </Route>

          <Route exact path="/signup">
            <SignUp />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/news">
            <News />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
