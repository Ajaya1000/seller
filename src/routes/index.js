import React, { Component } from 'react'
import SignUp from '../authpages/signup'
import { BrowserRouter } from 'react-router-dom'
import Home from '../components'
export default class Routes extends Component {
  render() {
    return (
      // <>
      //   
      // </>
      <BrowserRouter>
        <Home/>
      </BrowserRouter>
    )
  }
}
