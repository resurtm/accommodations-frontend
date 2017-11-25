import {SET_ACTIVE_YEAR} from 'actions/rooms-editor';

const defaultState = new Date().getFullYear();

const activeYear = (state = defaultState, action) => {
  switch (action.type) {
    case SET_ACTIVE_YEAR:
      return action.year;

    default:
      return state;
  }
};

export default activeYear
