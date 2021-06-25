import React, { useState } from 'react'
import './App.css';
import Nav from './components/Nav'
import Portfolio from './components/Portfolio'
import Three from './Utils/Three.js'

function App() {
  const [assets, setAssets] = useState([])
  return (
    <div className="App">
      <Nav />
      <Three></Three>
      <Portfolio assets = {assets}/>
    </div>
  );
}

export default App;