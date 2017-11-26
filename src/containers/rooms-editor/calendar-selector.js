import {connect} from 'react-redux';
import {selectDay, selectDayRange, selectDays, deselectDays} from 'actions/rooms-editor';
import Calendar from 'components/rooms-editor/calendar';

const mapStateToProps = state => {
  return {
    activeRoom: state.roomsEditor.activeRoom,
    activeYear: state.roomsEditor.activeYear,
    selectedDays: state.roomsEditor.selectedDays,
    spots: state.roomsEditor.spots,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDaySelected: (isRange, isMultiple, month, day) => {
      if (isRange && !isMultiple) {
        dispatch(selectDayRange(month, day));
      } else if (!isRange && isMultiple) {
        dispatch(selectDays(month, day));
      } else {
        dispatch(selectDay(month, day));
      }
    },
    onCalendarClick: () => {
      dispatch(deselectDays());
    },
  };
};

const CalendarSelector = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calendar);

export default CalendarSelector
