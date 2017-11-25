const defaultState = {
  activeRoom: '',
  activeYear: new Date().getFullYear(),
  selectedDays: [],
};

const selectDayRange = ([startMonth, startDay], [endMonth, endDay]) => {
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

const roomsEditor = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_ROOM':
      return {
        ...state,
        activeRoom: action.room,
      };

    case 'SET_ACTIVE_YEAR':
      return {
        ...state,
        activeYear: action.year,
      };

    case 'SELECT_DAY':
      return {
        ...state,
        selectedDays: [[action.month, action.day]],
      };

    case 'SELECT_DAY_RANGE':
      return {
        ...state,
        selectedDays:
          state.selectedDays.length === 0
            ? [[action.month, action.day]]
            : selectDayRange(state.selectedDays[state.selectedDays.length - 1], [action.month, action.day]),
      };

    case 'DESELECT_DAYS':
      return {
        ...state,
        selectedDays: [],
      };

    default:
      return {
        ...state,
      };
  }
};

export default roomsEditor
