import {connect} from 'react-redux';
import {selectDay, selectDayRange, deselectDays} from 'actions/rooms-editor';
import Calendar from 'components/rooms-editor/calendar';

const mapStateToProps = state => {
  return {
    activeRoom: state.roomsEditor.activeRoom,
    activeYear: state.roomsEditor.activeYear,
    selectedDays: state.roomsEditor.selectedDays,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDaySelected: (isRange, month, day) => {
      dispatch(isRange
        ? selectDayRange(month, day)
        : selectDay(month, day));
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
