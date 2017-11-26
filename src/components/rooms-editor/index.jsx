import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ActiveRoomSelector from 'containers/rooms-editor/active-room-selector';
import ActiveYearSelector from 'containers/rooms-editor/active-year-selector';
import CalendarSelector from 'containers/rooms-editor/calendar-selector';
import SpotsSpecsEditor from 'containers/rooms-editor/spots-specs-editor';

export default class RoomsEditor extends React.Component {
  componentWillMount() {
    this.props.loadRooms();
  }

  render() {
    return (
      <div>
        <Columns className="columns" isLoading={this.props.isLoading}>
          <div className="column is-four-fifths">
            <div className="columns">
              <div className="column is-two-fifths">
                <ActiveRoomSelector/>
              </div>
              <div className="column">
                <ActiveYearSelector/>
              </div>
            </div>
            <CalendarSelector/>
          </div>
          <div className="column">
            {this.props.hasSelectedDays ? <SpotsSpecsEditor/> : null}
          </div>
        </Columns>
      </div>
    );
  }
}

RoomsEditor.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  hasSelectedDays: PropTypes.bool.isRequired,
  loadRooms: PropTypes.func.isRequired,
};

const Columns = styled.div`
  opacity: ${p => p.isLoading ? 0.35 : 1.0};
  pointer-events: ${p => p.isLoading ? 'none' : 'auto'};
`;
