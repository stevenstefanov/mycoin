import React, { useState } from 'react'
import './App.css';
import Nav from './components/Nav'
import Portfolio from './components/Portfolio'
import Three from './Utils/Three.js'
import Chart from './Utils/charts';
import AddAsset from './components/AddAsset'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Coin from './components/Rankings'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import News from './components/News';
import LandingPage from './components/LandingPage';



function App() {
  const [assets, setAssets] = useState([])

  return (
    <Router>
    
      <Switch>
      
      <div className="App">
      <Route exact path ='/'>
        <LandingPage />
      </Route>

  
      
      <Route exact path = '/home'>
      <Nav />
      <AddAsset/>
      </Route>
      
      <Route exact path = '/portfolio'>
      <Nav />
      <Portfolio assets = {assets}/>
      <Chart />
      </Route>

      <Route exact path = '/rankings'>
      <Nav />
      <Coin/>
      </Route>

      <Route exact path = '/signup'>
      <Nav />
      <SignUp/>
      </Route>

      <Route exact path ='/login'>
      <Nav />
        <Login/>
      </Route>
      <Route exact path ='/news'>
        <Nav />
        <News />
      </Route>
      </div>

    
    </Switch>

    
    </Router>
  );
}

export default App;
