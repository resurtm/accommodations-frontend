import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {getUserAuth} from 'service/auth';

export const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => (
    getUserAuth() === null
      ? <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
      : <Component {...props} />
  )}/>
);
