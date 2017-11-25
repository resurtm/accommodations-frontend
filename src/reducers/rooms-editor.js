import Immutable from 'seamless-immutable';
import {
  DESELECT_DAYS,
  SELECT_DAY,
  SELECT_DAY_RANGE,
  SET_ACTIVE_ROOM,
  SET_ACTIVE_YEAR,
  SET_LOADING,
  SET_ROOMS,
} from 'actions/rooms-editor';

const selectDaysRange = ([startMonth, startDay], [endMonth, endDay]) => {
  const selectedDays = [];
  if (startMonth === endMonth) {
    for (let i = startDay; i <= endDay; i++) {
      selectedDays.push([startMonth, i]);
    }
  } else {
    for (let i = startDay; i <= 31; i++) {
      selectedDays.push([startMonth, i]);
    }
    if (Math.abs(startMonth - endMonth) > 1) {
      for (let i = startMonth + 1; i <= endMonth - 1; i++) {
        for (let j = 1; j <= 31; j++) {
          selectedDays.push([i, j]);
        }
      }
    }
    for (let i = 1; i <= endDay; i++) {
      selectedDays.push([endMonth, i]);
    }
  }
  return selectedDays;
};

const selectedDays = (state = [], action) => {
  switch (action.type) {
    case SELECT_DAY:
      return [[action.month, action.day]];

    case SELECT_DAY_RANGE:
      return state.length === 0
        ? [[action.month, action.day]]
        : selectDaysRange(state[state.length - 1], [action.month, action.day]);

    case DESELECT_DAYS:
      return [];

    default:
      return state;
  }
};

const roomsEditor = (state = {
  isLoading: false,
  rooms: [],
  activeRoom: 0,
  activeYear: new Date().getFullYear(),
  selectedDays: [],
}, action) => {
  switch (action.type) {
    case SET_LOADING:
      return Immutable.merge(state, {
        isLoading: action.isLoading,
      });

    case SET_ROOMS:
      return Immutable.merge(state, {
        rooms: action.rooms,
      });

    case SET_ACTIVE_ROOM:
      return Immutable.merge(state, {
        activeRoom: action.room,
        selectedDays: [],
      });

    case SET_ACTIVE_YEAR:
      return Immutable.merge(state, {
        activeYear: action.year,
        selectedDays: [],
      });

    case SELECT_DAY:
    case SELECT_DAY_RANGE:
    case DESELECT_DAYS:
      return Immutable.merge(state, {
        selectedDays: selectedDays(state.selectedDays, action),
      });

    default:
      return state;
  }
};

export default roomsEditor
