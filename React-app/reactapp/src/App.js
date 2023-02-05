import './App.css';
import React from 'react';
import NavBar from './components/Nav-bar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
        <Route path='/' exact />
      </Switch>
      </Router>
    </>
  );
}

export default App;
