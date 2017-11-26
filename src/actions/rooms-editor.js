import Immutable from 'seamless-immutable';
import _ from 'lodash';
import {fetchRooms, fetchSpots, submitSpots} from 'tools/api';

export const SET_LOADING = 'SET_LOADING';
export const setLoading = isLoading => {
  return Immutable({type: SET_LOADING, isLoading});
};

export const SET_ACTIVE_ROOM = 'SET_ACTIVE_ROOM';
export const setActiveRoom = room => (dispatch, getState) => {
  dispatch(Immutable({type: SET_ACTIVE_ROOM, room}));
  dispatch(setSpots({}));
  if (room === 0 || !room) {
    return;
  }

  dispatch(setLoading(true));
  fetchSpots(room, getState().roomsEditor.year).then(spots => {
    dispatch(setSpots(spots));
    dispatch(setLoading(false));
  });
};

export const SET_ACTIVE_YEAR = 'SET_ACTIVE_YEAR';
export const setActiveYear = year => (dispatch, getState) => {
  dispatch(Immutable({type: SET_ACTIVE_YEAR, year}));
  dispatch(setSpots({}));

  dispatch(setLoading(true));
  fetchSpots(getState().roomsEditor.room, year).then(spots => {
    dispatch(setSpots(spots));
    dispatch(setLoading(false));
  });
};

export const LOAD_ROOMS = 'LOAD_ROOMS';
export const loadRooms = () => (dispatch, getState) => {
  dispatch(setLoading(true));
  fetchRooms().then(rooms => {
    dispatch(Immutable({type: LOAD_ROOMS, rooms}));
    dispatch(setLoading(false));
  });
};

export const SET_SPOTS = 'SET_SPOTS';
export const setSpots = spots => {
  return Immutable({type: SET_SPOTS, spots});
};

export const APPLY_SPOTS = 'APPLY_SPOTS';
export const applySpots = spotData => (dispatch, getState) => {
  dispatch(setLoading(true));

  const spots = {};
  _.forEach(getState().roomsEditor.selectedDays, ([month, day]) => {
    spots[`${month}.${day}`] = spotData;
  });

  submitSpots().then(() => {
    dispatch(Immutable({type: APPLY_SPOTS, spots: spots}));
    dispatch(deselectDays());
    dispatch(setLoading(false));
  });
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
