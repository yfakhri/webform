import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect,RouteProps } from 'react-router-dom';
import './App.css';
import Home from './home/Home';
import Login from './login/Login';
import { useSelector } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { RootState } from './app/store';


function PrivateRoute({ children, ...rest }:RouteProps) {
  const auth = useSelector((state:RootState) => state.firebase.auth)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoaded(auth) && !isEmpty(auth) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login" component={ Login } />
      </Switch>
    </Router>
  );
}

export default App;
