import {combineReducers} from 'redux';
import roomsEditor from 'reducers/rooms-editor';

const reTicketsApp = combineReducers({
  roomsEditor,
});

export default reTicketsApp
