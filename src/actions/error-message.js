export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
export const setErrorMessage = errorMessage => async (dispatch, getState) => {
  dispatch({type: SET_ERROR_MESSAGE, errorMessage});
  setTimeout(() => {
    dispatch({type: SET_ERROR_MESSAGE, errorMessage: ''});
  }, 5000);
};
