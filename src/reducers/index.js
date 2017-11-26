import {combineReducers} from 'redux';
import errorMessage from './errorMessage';
import isLoading from './is-loading';
import roomsEditor from './rooms-editor';

const reTicketsApp = combineReducers({
  errorMessage,
  isLoading,
  roomsEditor,
});

export default reTicketsApp
