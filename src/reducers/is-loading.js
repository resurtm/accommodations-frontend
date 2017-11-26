import {SET_LOADING} from 'actions/is-loading';

const isLoading = (state = false, action) => {
  switch (action.type) {
    case SET_LOADING:
      return action.isLoading;

    default:
      return state;
  }
};

export default isLoading
