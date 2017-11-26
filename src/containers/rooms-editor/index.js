import {connect} from 'react-redux';
import {loadRooms} from 'actions/rooms-editor';
import BaseRoomsEditor from 'components/rooms-editor';
import Immutable from 'seamless-immutable';

const mapStateToProps = state => {
  return Immutable({
    isLoading: state.roomsEditor.isLoading,
  });
};

const mapDispatchToProps = dispatch => {
  return Immutable({
    loadRooms: () => {
      dispatch(loadRooms());
    },
  });
};

const RoomsEditor = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BaseRoomsEditor);

export default RoomsEditor
