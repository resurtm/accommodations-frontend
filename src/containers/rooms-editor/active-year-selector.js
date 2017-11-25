import {connect} from 'react-redux';
import {setActiveYear} from 'actions/rooms-editor';
import YearSelector from 'components/rooms-editor/year-selector';

const mapStateToProps = state => {
  return {
    year: state.roomsEditor.activeYear,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onYearChanged: year => {
      dispatch(setActiveYear(year));
    },
  };
};

const ActiveYearSelector = connect(
  mapStateToProps,
  mapDispatchToProps,
)(YearSelector);

export default ActiveYearSelector
