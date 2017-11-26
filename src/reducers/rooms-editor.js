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
  APPLY_SPOTS,
} from 'actions/rooms-editor';
import {selectDayRange} from 'tools/days';
import Immutable from 'seamless-immutable';


const spots = (state = {}, action) => {
  switch (action.type) {
    case SET_SPOTS:
      return Immutable(action.spots);

    case APPLY_SPOTS:
      return Immutable.merge(state, action.spots);
  }
};

const selectedDays = (state = [], action) => {
  switch (action.type) {
    case SELECT_DAY:
      return Immutable([
        [action.month, action.day],
      ]);

    case SELECT_DAY_RANGE:
      return Immutable(selectDayRange(state, [action.month, action.day]));

    case SELECT_DAYS:
      return state.concat([
        [action.month, action.day],
      ]);

    case DESELECT_DAYS:
      return Immutable([]);

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
  spots: {},
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
    case APPLY_SPOTS:
      return Immutable.merge(state, {
        spots: spots(state.spots, action),
      });

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
