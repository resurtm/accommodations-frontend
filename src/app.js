import React from 'react';
import {render} from 'react-dom';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import reduxLogger from 'redux-logger';
import reducer from 'reducers';
import MainContainer from 'components/layout/main-container';
import 'bulma/bulma.sass';
import 'font-awesome/scss/font-awesome.scss';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(reduxLogger, thunkMiddleware),
));

export default function App(props) {
  return (
    <Provider store={store}>
      <MainContainer/>
    </Provider>
  );
}

render(<App/>, document.getElementById('app'));
