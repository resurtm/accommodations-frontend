import {checkAuthToken, signinUser, signoutUser, signupUser} from 'service/auth';

export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

export const loginUser = (email, password) => async dispatch => {
  dispatch({type: USER_LOGIN_REQUEST, email});
  try {
    await signinUser(email, password);
    dispatch({type: USER_LOGIN_SUCCESS, email});
  } catch (error) {
    dispatch({type: USER_LOGIN_FAILURE, error});
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

export const registerUser = (username, email, password) => async dispatch => {
  dispatch({type: USER_REGISTER_REQUEST});
  try {
    await signupUser(username, email, password);
    dispatch({type: USER_REGISTER_SUCCESS});
    dispatch(loginUser(email, password));
  } catch (error) {
    dispatch({type: USER_REGISTER_FAILURE, error});
  }
};

export const CHECK_USER_AUTH_REQUEST = 'CHECK_USER_AUTH_REQUEST';
export const CHECK_USER_AUTH_SUCCESS = 'CHECK_USER_AUTH_SUCCESS';
export const CHECK_USER_AUTH_FAILURE = 'CHECK_USER_AUTH_FAILURE';

export const checkUserAuth = () => async dispatch => {
  dispatch({type: CHECK_USER_AUTH_REQUEST});
  try {
    await checkAuthToken();
    dispatch({type: CHECK_USER_AUTH_SUCCESS});
  } catch (error) {
    dispatch({type: CHECK_USER_AUTH_FAILURE, error});
  }
};
