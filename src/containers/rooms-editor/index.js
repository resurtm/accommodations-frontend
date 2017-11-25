import {connect} from 'react-redux';
import {loadRooms} from 'actions/rooms-editor';
import BaseRoomsEditor from 'components/rooms-editor';

const mapStateToProps = state => {
  return {
    isLoading: state.roomsEditor.isLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadRooms: () => {
      dispatch(loadRooms());
    },
  };
};

const RoomsEditor = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BaseRoomsEditor);

export default RoomsEditor
