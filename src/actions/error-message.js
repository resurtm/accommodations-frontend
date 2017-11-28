import Immutable from 'seamless-immutable';

export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
export const setErrorMessage = errorMessage => async (dispatch, getState) => {
  dispatch(Immutable({type: SET_ERROR_MESSAGE, errorMessage}));
  setTimeout(() => {
    dispatch(Immutable({type: SET_ERROR_MESSAGE, errorMessage: ''}));
  }, 5000);
};
