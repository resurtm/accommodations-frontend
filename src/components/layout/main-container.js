import React from 'react';
import Navbar from './navbar';
import RoomsEditor from 'containers/rooms-editor';
import Preloading from 'containers/tools/preloading';
import ErrorMessage from 'containers/tools/error-message';

export default function MainContainer(props) {
  return (
    <div>
      <Navbar/>
      <section className="section">
        <div className="container">
          <RoomsEditor/>
        </div>
      </section>
      <Preloading/>
      <ErrorMessage/>
    </div>
  );
}
