import {connect} from 'react-redux';
import SpotsSpecsForm from 'components/rooms-editor/spots-specs-form';

const mapStateToProps = state => {
  return {
    hasSelectedDays: state.roomsEditor.selectedDays.length > 0,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const SpotsSpecsEditor = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SpotsSpecsForm);

export default SpotsSpecsEditor
