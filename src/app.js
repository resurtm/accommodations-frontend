import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import 'bulma/bulma.sass'
import reTicketsApp from 'reducers';
import MainLayout from 'components/layout/main-layout';
import RoomsEditor from 'components/editor/rooms-editor';

const store = createStore(
  reTicketsApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainLayout>
          <RoomsEditor/>
        </MainLayout>
      </Provider>
    );
  }
}

render(<App/>, document.getElementById('app'));
