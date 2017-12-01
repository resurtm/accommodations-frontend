import React from 'react'
import {Route} from 'react-router-dom'

import Navbar from './navbar'
import Footer from './footer'
import StandardLayout from './standard-layout'

import Home from 'components/pages/home'
import LoginForm from 'components/auth/login-form'
import RoomsEditor from 'containers/rooms-editor'
import Accommodations from 'components/accommodations'

import Preloading from 'containers/tools/preloading'
import ErrorMessage from 'containers/tools/error-message'

export default function MainContainer() {
  return (
    <div>
      <Navbar/>

      <Route exact path="/" component={Home}/>
      <Route path="/login" component={StandardLayout(LoginForm)}/>
      <Route path="/spots" component={StandardLayout(RoomsEditor)}/>
      <Route path="/accommodations" component={StandardLayout(Accommodations)}/>

      <Footer/>
      <Preloading/>
      <ErrorMessage/>
    </div>
  )
}
