import {connect} from 'react-redux';
import {setActiveRoom} from 'actions/rooms-editor';
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
      dispatch(setActiveRoom(room));
    },
  };
};

const ActiveRoomSelector = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RoomSelector);

export default ActiveRoomSelector
