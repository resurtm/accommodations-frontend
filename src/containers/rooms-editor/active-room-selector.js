import {connect} from 'react-redux';
import {setActiveRoom} from 'actions/rooms-editor';
import RoomSelector from 'components/rooms-editor/room-selector';
import Immutable from 'seamless-immutable';

const mapStateToProps = state => {
  return Immutable({
    activeRoom: state.roomsEditor.activeRoom,
    rooms: state.roomsEditor.rooms,
  });
};

const mapDispatchToProps = dispatch => {
  return Immutable({
    onRoomChanged: room => {
      dispatch(setActiveRoom(room));
    },
  });
};

const ActiveRoomSelector = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RoomSelector);

export default ActiveRoomSelector
