import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './home/Home';
import Login from './login/Login';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/login" component={ Login } />
      </Switch>
    </Router>
  );
}

export default App;
