const defaultState = {
  activeRoom: '',
  activeYear: new Date().getFullYear(),
  selectedDays: [],
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

    default:
      return state;
  }
};

export default roomsEditor
