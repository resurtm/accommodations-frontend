import {SET_ACTIVE_ROOM} from 'actions/rooms-editor';

const activeRoom = (state = '', action) => {
  switch (action.type) {
    case SET_ACTIVE_ROOM:
      return action.room;

    default:
      return state;
  }
};

export default activeRoom
