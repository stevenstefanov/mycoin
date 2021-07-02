import React, { useState } from 'react'
import './App.css';
import Nav from './components/Nav'
import Portfolio from './components/Portfolio'
import Three from './Utils/Three.js'
import AddAsset from './components/AddAsset'
import SignUp from './components/SignUp'
import Login from './components/Login'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import News from './components/News';
import {LoginProvider, useLoginState, useLoginAction} from './Utils/loginState';

function App() {
  const [assets, setAssets] = useState([])
  const state = useLoginState()
  return (
    <Router>
    
      <Switch>
      
       <div className="App">

      <Nav />
      <Route exact path ='/'>
      <Three></Three>
      </Route>
      <Route exact path = '/home'>
      <AddAsset/>
      </Route>
      
      <Route exact path = '/portfolio'>
      <Portfolio assets = {assets}/>
      </Route>

      <Route exact path = '/signup'>
        <SignUp/>
      </Route>

      <Route exact path ='/login'>
        <Login/>
      </Route>
      <Route exact path ='/news'>
        <News />
      </Route>
    </div>
    
    </Switch>

    
    </Router>
  );
}

export default App;
