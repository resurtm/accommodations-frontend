import {getUserAuth} from 'service/auth';
import {
  CHECK_USER_AUTH_FAILURE,
  CHECK_USER_AUTH_REQUEST,
  CHECK_USER_AUTH_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_FAILURE,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS
} from "../actions/auth";

const userAuth = getUserAuth();
const initialState = {
  email: userAuth === null ? null : userAuth.email,
  loggedIn: userAuth !== null,

  loggingIn: false,
  loggingError: null,

  loggingOut: false,
  loggingOutError: null,

  checkingAuth: false,
  checkingAuthError: null,
};

const errMsg = (error) => {
  let message = _.get(error, 'response.data.msg', null);
  if (message === null || message.length === 0) {
    message = error.message;
  }
  return message;
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {...state, email: action.email, loggedIn: false, loggingIn: true, loggingError: null};
    case USER_LOGIN_SUCCESS:
      return {...state, email: action.email, loggedIn: true, loggingIn: false, loggingError: null};
    case USER_LOGIN_FAILURE:
      return {...state, email: null, loggedIn: false, loggingIn: false, loggingError: errMsg(action.error)};

    case USER_LOGOUT_REQUEST:
      return {...state, loggingOut: true, loggingOutError: null};
    case USER_LOGOUT_SUCCESS:
      return {...state, email: null, loggedIn: false, loggingOut: false, loggingOutError: null};
    case USER_LOGOUT_FAILURE:
      return {...state, loggingOut: false, loggingOutError: errMsg(action.error)};

    case CHECK_USER_AUTH_REQUEST:
      return {...state, checkingAuth: true, checkingAuthError: null};
    case CHECK_USER_AUTH_SUCCESS:
      return {...state, checkingAuth: false, checkingAuthError: null};
    case CHECK_USER_AUTH_FAILURE:
      return {...state, email: null, loggedIn: false, checkingAuth: false, checkingAuthError: errMsg(action.error)};

    default:
      return state;
  }
};

export default auth
