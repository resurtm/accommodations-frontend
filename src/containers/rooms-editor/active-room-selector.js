import {connect} from 'react-redux';
import {changeActiveRoom} from 'actions/rooms-editor';
import RoomSelector from 'components/rooms-editor/room-selector';

const mapStateToProps = state => {
  return {
    activeRoom: state.roomsEditor.activeRoom,
    rooms: state.roomsEditor.rooms,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRoomChanged: room => {
      dispatch(changeActiveRoom(room));
    },
  };
};

const ActiveRoomSelector = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RoomSelector);

export default ActiveRoomSelector
