import {DESELECT_DAYS, SELECT_DAY, SELECT_DAY_RANGE} from 'actions/rooms-editor';

const selectDayRange = ([startMonth, startDay], [endMonth, endDay]) => {
  const days = [];
  if (startMonth === endMonth) {
    for (let i = startDay; i <= endDay; i++) {
      days.push([startMonth, i]);
    }
  } else {
    for (let i = startDay; i <= 31; i++) {
      days.push([startMonth, i]);
    }
    if (Math.abs(startMonth - endMonth) > 1) {
      for (let i = startMonth + 1; i <= endMonth - 1; i++) {
        for (let j = 1; j <= 31; j++) {
          days.push([i, j]);
        }
      }
    }
    for (let i = 1; i <= endDay; i++) {
      days.push([endMonth, i]);
    }
  }
  return days;
};

const selectedDays = (state = [], action) => {
  switch (action.type) {
    case SELECT_DAY:
      return [[action.month, action.day]];

    case SELECT_DAY_RANGE:
      if (state.length === 0) {
        return [[action.month, action.day]];
      } else {
        return selectDayRange(
          state[state.length - 1],
          [action.month, action.day],
        );
      }

    case DESELECT_DAYS:
      return [];

    default:
      return state;
  }
};

export default selectedDays
