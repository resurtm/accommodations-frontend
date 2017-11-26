import {combineReducers} from 'redux';
import isLoading from './is-loading';
import roomsEditor from './rooms-editor';

const reTicketsApp = combineReducers({
  isLoading,
  roomsEditor,
});

export default reTicketsApp
