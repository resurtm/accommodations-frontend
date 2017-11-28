import React from 'react';
import PropTypes from 'prop-types';

export default function RoomSelector(props) {
  return (
    <div className="field">
      <label className="label">Select Room:</label>
      <div className="control has-icons-left">
        <div className="select is-info is-fullwidth">
          <select value={props.activeRoom}
                  onChange={e => {
                    const id = parseInt(e.target.value, 10);
                    props.onRoomChanged(isNaN(id) ? 0 : id);
                  }}>
            <option value=""/>
            {props.rooms.map(room => (
              <option key={room.id} value={room.id}>{room.name}</option>
            ))}
          </select>
        </div>
        <span className="icon is-left"><i className="fa fa-home" aria-hidden="true"/></span>
      </div>
    </div>
  );
}

RoomSelector.propTypes = {
  activeRoom: PropTypes.number.isRequired,
  rooms: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  onRoomChanged: PropTypes.func.isRequired,
};
