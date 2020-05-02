import React from 'react';
import './App.css';
import PhotoOfDay from './components/pod';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <PhotoOfDay />
    </div>
  );
}

export default App;
