import {connect} from 'react-redux';
import {deselectDays, applySpots} from 'actions/rooms-editor';
import SpotsSpecsForm from 'components/rooms-editor/spots-specs-form';
import Immutable from 'seamless-immutable';
import {calcCommonSpot} from 'tools/spots';

const mapStateToProps = state => {
  return Immutable({
    initialSpot: calcCommonSpot(state.roomsEditor.selectedDays, state.roomsEditor.spots),
  });
};

const mapDispatchToProps = dispatch => {
  return Immutable({
    onApply: (spotData) => {
      dispatch(applySpots(spotData));
    },
    onReset: () => {
      dispatch(deselectDays());
    },
  });
};

const SpotsSpecsEditor = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SpotsSpecsForm);

export default SpotsSpecsEditor
