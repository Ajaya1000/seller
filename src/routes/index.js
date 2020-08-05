import React, { Component } from 'react'
import SignUp from '../authpages/signup'
import { HashRouter, Route } from 'react-router-dom'
import Home from '../components';
import SignIn from '../authpages/signin'
import {Switch} from 'react-router-dom'
import PrivateRoute from './privateroute'
export default class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <PrivateRoute component={Home} />
        </Switch>
      </HashRouter>
    )
  }
}

