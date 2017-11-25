import React from 'react';
import PropTypes from 'prop-types';

export default class RoomSelector extends React.Component {
  render() {
    return (
      <div className="field">
        <label className="label">Select Room:</label>
        <div className="control">
          <div className="select is-info is-fullwidth">
            <select value={this.props.room}
                    onChange={(e) => this.props.onRoomChanged(e.target.value)}>
              <option value=""/>
              <option value="room-type-1">Room Type #1</option>
              <option value="room-type-2">Room Type #2</option>
              <option value="room-type-3">Room Type #3</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

RoomSelector.propTypes = {
  room: PropTypes.string.isRequired,
  onRoomChanged: PropTypes.func.isRequired,
};
