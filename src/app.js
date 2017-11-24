import React from 'react';
import {render} from 'react-dom';
import 'style.scss';
import MainLayout from 'layout/main-layout';
import RoomsEditor from 'editor/rooms-editor';

export default class App extends React.Component {
  render() {
    return (
      <MainLayout>
        <RoomsEditor/>
      </MainLayout>
    );
  }
}

render(<App/>, document.getElementById('app'));
