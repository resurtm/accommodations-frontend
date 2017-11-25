export const SET_LOADING = 'SET_LOADING';
export const setLoading = isLoading => {
  return {type: SET_LOADING, isLoading};
};

export const SET_ACTIVE_ROOM = 'SET_ACTIVE_ROOM';
export const setActiveRoom = room => {
  return {type: SET_ACTIVE_ROOM, room};
};

const loadSpots = (dispatch, getState) => {
  dispatch(setLoading(true));
  setTimeout(() => {
    const spots = new Map();
    spots.set([1, 13], {status: 'open', count: 10, price: 49.95});
    spots.set([1, 14], {status: 'open', count: 10, price: 49.95});
    spots.set([1, 15], {status: 'open', count: 10, price: 49.95});
    spots.set([2, 4], {status: 'close', count: 15, price: 29.95});
    spots.set([2, 5], {status: 'close', count: 15, price: 29.95});
    spots.set([2, 6], {status: 'close', count: 15, price: 29.95});
    spots.set([2, 7], {status: 'close', count: 15, price: 29.95});
    dispatch(setSpots(spots));
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
  return {type: SET_ROOMS, rooms};
};

export const SET_ACTIVE_YEAR = 'SET_ACTIVE_YEAR';
export const setActiveYear = year => {
  return {type: SET_ACTIVE_YEAR, year};
};

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
  }, 1000);
};

export const SET_SPOTS = 'SET_SPOTS';
export const setSpots = spots => {
  return {type: SET_SPOTS, spots};
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
