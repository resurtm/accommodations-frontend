import Immutable from 'seamless-immutable';

export const SET_LOADING = 'SET_LOADING';
export const setLoading = isLoading => {
  return Immutable({type: SET_LOADING, isLoading});
};

export const SET_ACTIVE_ROOM = 'SET_ACTIVE_ROOM';
export const setActiveRoom = room => {
  return Immutable({type: SET_ACTIVE_ROOM, room});
};

const loadSpots = (dispatch, getState) => {
  dispatch(setLoading(true));
  setTimeout(() => {
    dispatch(setSpots(Immutable({
      '1.13': {status: 'open', count: 10, price: 49.95},
      '1.14': {status: 'open', count: 10, price: 49.95},
      '1.15': {status: 'open', count: 10, price: 49.95},
      '1.16': {status: 'open', count: 10, price: 49.95},
      '2.4': {status: 'close', count: 5, price: 29.95},
      '2.5': {status: 'close', count: 5, price: 29.95},
      '2.6': {status: 'close', count: 5, price: 29.95},
      '2.7': {status: 'close', count: 5, price: 29.95},
      '2.8': {status: 'close', count: 5, price: 29.95},
    })));
    dispatch(setLoading(false));
  }, 1000);
};

export const changeActiveRoom = room => (dispatch, getState) => {
  dispatch(setActiveRoom(room));
  dispatch(setSpots(new Map()));
  if (room === 0 || !room) {
    return;
  }
  loadSpots(dispatch, getState);
};

export const changeActiveYear = year => (dispatch, getState) => {
  dispatch(setActiveYear(year));
  dispatch(setSpots(new Map()));
  loadSpots(dispatch, getState);
};

export const SET_ROOMS = 'SET_ROOMS';
export const setRooms = rooms => {
  return Immutable({type: SET_ROOMS, rooms});
};

export const SET_ACTIVE_YEAR = 'SET_ACTIVE_YEAR';
export const setActiveYear = year => {
  return Immutable({type: SET_ACTIVE_YEAR, year});
};

export const loadRooms = () => dispatch => {
  dispatch(setLoading(true));
  setTimeout(() => {
    dispatch(setRooms(Immutable([
      {id: 123123, name: 'Room Type #1'},
      {id: 123124, name: 'Room Type #2'},
      {id: 123125, name: 'Budget Room'},
      {id: 123126, name: 'Luxury Room'},
    ])));
    dispatch(setLoading(false));
  }, 1000);
};

export const SET_SPOTS = 'SET_SPOTS';
export const setSpots = spots => {
  return Immutable({type: SET_SPOTS, spots});
};

export const SELECT_DAY = 'SELECT_DAY';
export const selectDay = (month, day) => {
  return Immutable({type: SELECT_DAY, month, day});
};

export const SELECT_DAY_RANGE = 'SELECT_DAY_RANGE';
export const selectDayRange = (month, day) => {
  return Immutable({type: SELECT_DAY_RANGE, month, day});
};

export const SELECT_DAYS = 'SELECT_DAYS';
export const selectDays = (month, day) => {
  return Immutable({type: SELECT_DAYS, month, day});
};

export const DESELECT_DAYS = 'DESELECT_DAYS';
export const deselectDays = () => {
  return Immutable({type: DESELECT_DAYS});
};
