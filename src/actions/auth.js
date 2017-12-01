import {signinUser, signoutUser} from 'service/auth';
import _ from 'lodash';

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

export const loginUser = (email, password) => async dispatch => {
  dispatch({type: USER_LOGIN_REQUEST, email});
  try {
    await signinUser(email, password);
    dispatch({type: USER_LOGIN_SUCCESS, email});
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAILURE,
      error: _.get(error.response, 'data.msg', error.response.statusText),
    });
  }
};

export const USER_LOGOUT_REQUEST = 'USER_LOGOUT_REQUEST';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_LOGOUT_FAILURE = 'USER_LOGOUT_FAILURE';

export const logoutUser = () => async dispatch => {
  dispatch({type: USER_LOGOUT_REQUEST});
  try {
    await signoutUser();
    dispatch({type: USER_LOGOUT_SUCCESS});
  } catch (error) {
    dispatch({type: USER_LOGOUT_FAILURE, error});
  }
};

export const USER_REGISTER_REQUEST = 'USER_REGISTER_REQUEST';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAILURE = 'USER_REGISTER_FAILURE';
