import Immutable from 'seamless-immutable';
import {
  DESELECT_DAYS,
  SELECT_DAY,
  SELECT_DAY_RANGE,
  SELECT_DAYS,
  SET_ACTIVE_ROOM,
  SET_ACTIVE_YEAR,
  SET_LOADING,
  SET_ROOMS,
  SET_SPOTS,
} from 'actions/rooms-editor';
import {selectDayRange} from 'tools/days';

const selectedDays = (state = [], action) => {
  switch (action.type) {
    case SELECT_DAY:
      return [[action.month, action.day]];

    case SELECT_DAY_RANGE:
      return selectDayRange(state, [action.month, action.day]);

    case SELECT_DAYS:
      return state.concat([[action.month, action.day]]);

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
  spots: new Map(),
}, action) => {
  switch (action.type) {
    case SET_LOADING:
      return Immutable.merge(state, {
        isLoading: action.isLoading,
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

    case SET_ROOMS:
      return Immutable.merge(state, {
        rooms: action.rooms,
      });

    case SET_SPOTS:
      // todo: fixme: seamless-immutable does not work here
      // return Immutable.merge(state, {
      //   spots: action.spots,
      // });
      return {...state, spots: action.spots};

    case SELECT_DAY:
    case SELECT_DAY_RANGE:
    case SELECT_DAYS:
    case DESELECT_DAYS:
      return Immutable.merge(state, {
        selectedDays: selectedDays(state.selectedDays, action),
      });

    default:
      return state;
  }
};

export default roomsEditor
