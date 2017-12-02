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
  USER_LOGOUT_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../actions/auth";

const userAuth = getUserAuth();
const initialState = {
  email: userAuth === null ? null : userAuth.email,
  loggedIn: userAuth !== null,

  loggingIn: false,
  loggingInError: null,

  loggingOut: false,
  loggingOutError: null,

  signingUp: false,
  signingUpError: null,

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
      return {...state, email: action.email, loggedIn: false, loggingIn: true, loggingInError: null};
    case USER_LOGIN_SUCCESS:
      return {...state, email: action.email, loggedIn: true, loggingIn: false, loggingInError: null};
    case USER_LOGIN_FAILURE:
      return {...state, email: null, loggedIn: false, loggingIn: false, loggingInError: errMsg(action.error)};

    case USER_LOGOUT_REQUEST:
      return {...state, loggingOut: true, loggingOutError: null};
    case USER_LOGOUT_SUCCESS:
      return {...state, email: null, loggedIn: false, loggingOut: false, loggingOutError: null};
    case USER_LOGOUT_FAILURE:
      return {...state, loggingOut: false, loggingOutError: errMsg(action.error)};

    case USER_REGISTER_REQUEST:
      return {...state, signingUp: true, signingUpError: null};
    case USER_REGISTER_SUCCESS:
      return {...state, signingUp: false, signingUpError: null};
    case USER_REGISTER_FAILURE:
      return {...state, signingUp: false, signingUpError: errMsg(action.error)};

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
