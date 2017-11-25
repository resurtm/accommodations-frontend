import React from 'react';
import ActiveRoomSelector from 'containers/rooms-editor/active-room-selector';
import ActiveYearSelector from 'containers/rooms-editor/active-year-selector';
import CalendarSelector from 'containers/rooms-editor/calendar-selector';
import SpotsSpecsForm from './spots-specs-form';

export default class RoomsEditor extends React.Component {
  render() {
    return (
      <div className="columns">
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
          <SpotsSpecsForm hasSelectedDays={true}/>
        </div>
      </div>
    );
  }
}
