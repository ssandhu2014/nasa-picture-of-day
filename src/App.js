import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PhotoOfDay from './components/pod';
import './App.css';
import Home from './components/home';

function App() {
  return (
      <div>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/potd" component={PhotoOfDay} />
        </Switch>
      </div>
    
  );
}

export default App;
