import {connect} from 'react-redux';
import BaseRoomsEditor from 'components/rooms-editor';

const mapStateToProps = state => {
  return {
    isLoading: state.roomsEditor.isLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const RoomsEditor = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BaseRoomsEditor);

export default RoomsEditor
