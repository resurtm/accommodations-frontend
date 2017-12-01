import axios from 'axios';
import {USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS} from 'actions/auth';
import {CHECK_USER_AUTH_FAILURE, CHECK_USER_AUTH_REQUEST, CHECK_USER_AUTH_SUCCESS} from "../actions/auth";

const authUser = JSON.parse(localStorage.getItem(AUTH_USER));
if (authUser !== null) {
  axios.defaults.headers.common['Authorization'] = `bearer ${authUser.token}`;
}
const initialState = {
  email: authUser === null ? null : authUser.email,
  loggedIn: authUser !== null,

  loggingIn: false,
  loggingError: null,

  checkingAuth: false,
  checkingAuthError: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {...state, email: action.email, loggedIn: false, loggingIn: true, loggingError: null};
    case USER_LOGIN_SUCCESS:
      return {...state, email: action.email, loggedIn: true, loggingIn: false, loggingError: null};
    case USER_LOGIN_FAILURE:
      return {...state, email: null, loggedIn: false, loggingIn: false, loggingError: action.error};

    case CHECK_USER_AUTH_REQUEST:
      return {...state, checkingAuth: true, checkingAuthError: null};
    case CHECK_USER_AUTH_SUCCESS:
      return {...state, checkingAuth: false, checkingAuthError: null};
    case CHECK_USER_AUTH_FAILURE:
      return {...state, email: null, loggedIn: false, checkingAuth: false, checkingAuthError: action.error};

    default:
      return state;
  }
};

export default auth
