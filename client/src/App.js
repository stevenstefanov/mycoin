import React, { useState } from 'react'
import './App.css';
import Nav from './components/Nav'
import Portfolio from './components/Portfolio'
import Chart from './Utils/charts';
import AddAsset from './components/AddAsset'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Coin from './components/Rankings'
import { Switch, Route } from 'react-router-dom'
import News from './components/News';
import ThreeScene from './Utils/threeScene'





function App() {

  return (
    <div>
    <Switch>
    <Route path ='/' exact component={ThreeScene}>

    </Route>


    
    <Route path = '/home' >
    <Nav />
    <AddAsset/>
    </Route>
    
    <Route exact path = '/portfolio'>
    <Nav />
    <Portfolio />
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
  
    </Switch>
    </div>

  );
}



export default App;
