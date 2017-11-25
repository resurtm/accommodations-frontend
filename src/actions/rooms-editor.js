export const SET_LOADING = 'SET_LOADING';
export const setLoading = isLoading => {
  return {type: SET_LOADING, isLoading};
};

export const SET_ACTIVE_ROOM = 'SET_ACTIVE_ROOM';
export const setActiveRoom = room => {
  return {type: SET_ACTIVE_ROOM, room};
};

export const SET_ROOMS = 'SET_ROOMS';
export const setRooms = rooms => {
  return {type: SET_ROOMS, rooms};
};

export const LOAD_ROOMS = 'LOAD_ROOMS';
export const loadRooms = () => dispatch => {
  dispatch(setLoading(true));
  setTimeout(() => {
    dispatch(setRooms([
      {id: 123123, name: 'Room Type #1'},
      {id: 123124, name: 'Room Type #2'},
      {id: 123125, name: 'Budget Room'},
      {id: 123126, name: 'Luxury Room'},
    ]));
    dispatch(setLoading(false));
  }, 2000);
};

export const SET_ACTIVE_YEAR = 'SET_ACTIVE_YEAR';
export const setActiveYear = year => {
  return {type: SET_ACTIVE_YEAR, year};
};

export const SELECT_DAY = 'SELECT_DAY';
export const selectDay = (month, day) => {
  return {type: SELECT_DAY, month, day};
};

export const SELECT_DAY_RANGE = 'SELECT_DAY_RANGE';
export const selectDayRange = (month, day) => {
  return {type: SELECT_DAY_RANGE, month, day};
};

export const DESELECT_DAYS = 'DESELECT_DAYS';
export const deselectDays = () => {
  return {type: DESELECT_DAYS};
};
