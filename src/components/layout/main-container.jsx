import React from 'react';
import {Route} from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';
import RoomsEditor from 'containers/rooms-editor';
import Home from 'components/pages/home';
import Preloading from 'containers/tools/preloading';
import ErrorMessage from 'containers/tools/error-message';

export default function MainContainer(props) {
  return (
    <div>
      <Navbar/>
      <section className="section">
        <div className="container">
          <Route exact path="/" component={Home}/>
          <Route path="/spots" component={RoomsEditor}/>
        </div>
      </section>
      <Footer/>
      <Preloading/>
      <ErrorMessage/>
    </div>
  );
}
