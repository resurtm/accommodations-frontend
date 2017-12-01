import {USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS} from 'actions/auth';

const authUser = JSON.parse(localStorage.getItem(AUTH_USER));
const initialState = {
  email: authUser === null ? null : authUser.email,
  loggingIn: false,
  loggedIn: authUser !== null,
  error: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {email: action.email, loggingIn: true, loggedIn: false, error: null};

    case USER_LOGIN_SUCCESS:
      return {email: action.email, loggingIn: false, loggedIn: true, error: null};

    case USER_LOGIN_FAILURE:
      return {email: null, loggingIn: false, loggedIn: false, error: action.error};

    default:
      return state;
  }
};

export default auth
