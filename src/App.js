import React from 'react';
import './App.css';
import ImageComponent from './ImageComponent.js';
import Welcome from './Welcome.js';
import Navbar from './Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
    </div>
  );
}

export default App;
