import {combineReducers} from 'redux';
import activeRoom from './active-room';
import activeYear from './active-year';
import selectedDays from './selected-days';

const reTicketsApp = combineReducers({
  activeRoom,
  activeYear,
  selectedDays,
});

export default reTicketsApp
