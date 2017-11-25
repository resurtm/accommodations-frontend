import React from 'react';
import ActiveYearSelector from 'containers/editor/active-year-selector';

export default class RoomsEditor extends React.Component {
  render() {
    return (
      <div className="columns">
        <div className="column is-four-fifths">

          <div className="columns">
            <div className="column is-two-fifths">
              RoomSelector
            </div>
            <div className="column">
              <ActiveYearSelector/>
            </div>
          </div>

          Calendar

        </div>
        <div className="column">

          SpotsEditor

        </div>
      </div>
    );
  }
}
