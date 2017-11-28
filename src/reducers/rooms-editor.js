import {
  APPLY_SPOTS,
  DESELECT_DAYS,
  LOAD_ROOMS,
  SELECT_DAY,
  SELECT_DAY_RANGE,
  SELECT_DAYS,
  SET_ACTIVE_ROOM,
  SET_ACTIVE_YEAR,
  SET_SPOTS,
} from 'actions/rooms-editor';
import {selectDayRange} from 'tools/days';
import Immutable from 'seamless-immutable';
import _ from 'lodash';

const spots = (state = {}, action) => {
  switch (action.type) {
    case SET_SPOTS:
      return Immutable(action.spots);

    case APPLY_SPOTS:
      let spots = _.merge({}, state, action.spots);
      _.forEach(spots, (value, key) => {
        if (value.status === '') {
          delete spots[key];
        }
      });
      return Immutable(spots);

    default:
      return state;
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
  rooms: [],
  activeRoom: 0,
  activeYear: new Date().getFullYear(),
  selectedDays: [],
  spots: {},
}, action) => {
  switch (action.type) {
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

    case LOAD_ROOMS:
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
