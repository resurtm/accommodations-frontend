import React from 'react';
import PropTypes from 'prop-types';

export default class RoomSelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleRoomChanged = this.handleRoomChanged.bind(this);
  }

  handleRoomChanged(e) {
    const id = parseInt(e.target.value, 10);
    this.props.onRoomChanged(isNaN(id) ? 0 : id);
  }

  render() {
    return (
      <div className="field">
        <label className="label">Select Room:</label>
        <div className="control has-icons-left">
          <div className="select is-info is-fullwidth">
            <select value={this.props.activeRoom}
                    onChange={this.handleRoomChanged}>
              <option value=""/>
              {this.props.rooms.map(room => (
                <option key={room.id} value={room.id}>{room.name}</option>
              ))}
            </select>
          </div>
          <span className="icon is-left"><i className="fa fa-home" aria-hidden="true"/></span>
        </div>
      </div>
    );
  }
}

RoomSelector.propTypes = {
  activeRoom: PropTypes.number.isRequired,
  rooms: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
  onRoomChanged: PropTypes.func.isRequired,
};
