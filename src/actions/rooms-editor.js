export const SET_ACTIVE_ROOM = 'SET_ACTIVE_ROOM';
export const SET_ACTIVE_YEAR = 'SET_ACTIVE_YEAR';
export const SELECT_DAY = 'SELECT_DAY';
export const SELECT_DAY_RANGE = 'SELECT_DAY_RANGE';
export const DESELECT_DAYS = 'DESELECT_DAYS';

export const setActiveRoom = room => {
  return {type: SET_ACTIVE_ROOM, room};
};

export const setActiveYear = year => {
  return {type: SET_ACTIVE_YEAR, year};
};

export const selectDay = (month, day) => {
  return {type: SELECT_DAY, month, day};
};

export const selectDayRange = (month, day) => {
  return {type: SELECT_DAY_RANGE, month, day};
};

export const deselectDays = () => {
  return {type: DESELECT_DAYS};
};
