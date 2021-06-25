import React, { useState } from 'react'
import './App.css';
import Nav from './components/Nav'
import Portfolio from './components/Portfolio'

function App() {
  const [assets, setAssets] = useState([])
  return (
    <div className="App">
      <Nav />
      <Portfolio assets = {assets}/>
    </div>
  );
}

export default App;
