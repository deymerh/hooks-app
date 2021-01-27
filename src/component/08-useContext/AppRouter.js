import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { Nabvar } from './Nabvar';

export const AppRouter = () => {
  return (
    <Router>
      <Nabvar />
      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/about" component={AboutScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}
