import React from 'react';
import {render} from 'react-dom';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import reduxLogger from 'redux-logger';
import reducer from 'reducers';
import MainLayout from 'components/layout/main-layout';
import RoomsEditor from 'containers/rooms-editor';
import 'bulma/bulma.sass';
import 'font-awesome/scss/font-awesome.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunkMiddleware, reduxLogger),
));

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
