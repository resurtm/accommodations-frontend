import {combineReducers} from 'redux';
import auth from './auth';
import errorMessage from './errorMessage';
import isLoading from './is-loading';
import roomsEditor from './rooms-editor';

const accommodationsApp = combineReducers({
  auth,
  errorMessage,
  isLoading,
  roomsEditor,
});

export default accommodationsApp
