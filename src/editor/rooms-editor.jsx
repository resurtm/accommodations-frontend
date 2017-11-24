import React from 'react';
import RoomSelector from 'editor/room-selector';
import YearSelector from 'editor/year-selector';
import Calendar from 'editor/calendar/calendar';

export default class RoomsEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeYear: new Date().getFullYear(),
    };

    this.handleActiveYearChanged = this.handleActiveYearChanged.bind(this);
  }

  handleActiveYearChanged(activeYear) {
    this.setState({activeYear});
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-four-fifths">

          <div className="columns">
            <div className="column is-two-fifths">
              <RoomSelector/>
            </div>
            <div className="column">
              <YearSelector year={this.state.activeYear} onYearChanged={this.handleActiveYearChanged}/>
            </div>
          </div>

          <Calendar year={this.state.activeYear}/>

        </div>
        <div className="column">

          sidebar

        </div>
      </div>
    );
  }
}
