import React from 'react';
import {Route} from 'react-router-dom';

import Navbar from 'layout/navbar';
import Footer from 'layout/footer';
import StandardLayout from 'layout/standard-layout';

import Home from 'components/pages/home';
import RoomsEditor from 'containers/rooms-editor';
import Accommodations from 'components/accommodations';

import SigninPage from 'auth/signin-page';
import RegisterForm from 'auth/register-form';

import Preloading from 'containers/tools/preloading';
import ErrorMessage from 'containers/tools/error-message';

export default function MainContainer() {
  return (
    <div>
      <Navbar/>

      <Route exact path="/" component={Home}/>
      <Route path="/spots" component={StandardLayout(RoomsEditor)}/>
      <Route path="/accommodations" component={StandardLayout(Accommodations)}/>

      <Route path="/login" component={StandardLayout(SigninPage)}/>
      <Route path="/register" component={StandardLayout(RegisterForm)}/>

      <Footer/>
      <Preloading/>
      <ErrorMessage/>
    </div>
  );
}
