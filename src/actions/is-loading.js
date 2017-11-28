import Immutable from 'seamless-immutable';

export const SET_LOADING = 'SET_LOADING';
export const setLoading = isLoading => {
  return Immutable({type: SET_LOADING, isLoading});
};
