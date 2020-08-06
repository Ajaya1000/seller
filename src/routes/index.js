import React, { Component } from 'react'
import SignUp from '../authpages/signup'
import { HashRouter, Route } from 'react-router-dom'
import Home from '../components';
import SignIn from '../authpages/signin'
import Slider from '../authpages/signup/slider'
import {Switch} from 'react-router-dom'
import PrivateRoute from './privateroute'
export default class Routes extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
            <Route exact path="/signin" component={SignIn} />
            <Route  path="/signup/:uid" component={Slider} />
            <Route exact path="/signup" component={SignUp} />
            <PrivateRoute component={Home} />
        </Switch>
      </HashRouter>
    )
  }
}

