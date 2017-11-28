import _ from 'lodash';
import Immutable from 'seamless-immutable';
import {setLoading} from './is-loading';
import {setErrorMessage} from './error-message';
import {fetchRooms, fetchSpots, submitSpots} from 'tools/api';

export const SET_ACTIVE_ROOM = 'SET_ACTIVE_ROOM';
export const setActiveRoom = room => async (dispatch, getState) => {
  dispatch(Immutable({type: SET_ACTIVE_ROOM, room}));
  dispatch(clearSpots());
  if (room === 0 || !room) {
    return;
  }

  dispatch(setLoading(true));
  try {
    const spots = await fetchSpots(room, getState().roomsEditor.year);
    dispatch(setSpots(spots));
  } catch (e) {
    dispatch(setErrorMessage(e));
  }
  dispatch(setLoading(false));
};

export const SET_ACTIVE_YEAR = 'SET_ACTIVE_YEAR';
export const setActiveYear = year => async (dispatch, getState) => {
  dispatch(Immutable({type: SET_ACTIVE_YEAR, year}));
  dispatch(clearSpots());

  // it does not make sense to try to load something in case year *selected* but room *is not selected*
  const activeRoom = getState().roomsEditor.activeRoom;
  if (activeRoom === 0 || !activeRoom) {
    return;
  }

  dispatch(setLoading(true));
  try {
    const spots = await fetchSpots(getState().roomsEditor.room, year);
    dispatch(setSpots(spots));
  } catch (e) {
    dispatch(setErrorMessage(e));
  }
  dispatch(setLoading(false));
};

export const LOAD_ROOMS = 'LOAD_ROOMS';
export const loadRooms = () => async (dispatch, getState) => {
  dispatch(setLoading(true));
  try {
    const rooms = await fetchRooms();
    dispatch(Immutable({type: LOAD_ROOMS, rooms}));
  } catch (e) {
    dispatch(setErrorMessage(e));
  }
  dispatch(setLoading(false));
};

export const SET_SPOTS = 'SET_SPOTS';
export const setSpots = spots => {
  return Immutable({type: SET_SPOTS, spots});
};
export const clearSpots = () => {
  return setSpots({});
};

export const APPLY_SPOTS = 'APPLY_SPOTS';
export const applySpots = spotData => async (dispatch, getState) => {
  dispatch(setLoading(true));
  const spots = {};
  _.forEach(getState().roomsEditor.selectedDays, ([month, day]) => {
    spots[`${month}.${day}`] = spotData;
  });
  try {
    await submitSpots(spots);
    dispatch(Immutable({type: APPLY_SPOTS, spots}));
    dispatch(deselectDays());
  } catch (e) {
    dispatch(setErrorMessage(e));
  }
  dispatch(setLoading(false));
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
