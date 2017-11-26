import {connect} from 'react-redux';
import SpotsSpecsForm from 'components/rooms-editor/spots-specs-form';
import Immutable from 'seamless-immutable';

const mapStateToProps = state => {
  return Immutable({
    hasSelectedDays: state.roomsEditor.selectedDays.length > 0,
  });
};

const mapDispatchToProps = dispatch => {
  return Immutable({});
};

const SpotsSpecsEditor = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SpotsSpecsForm);

export default SpotsSpecsEditor
