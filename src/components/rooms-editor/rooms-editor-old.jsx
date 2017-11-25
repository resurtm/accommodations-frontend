import React from 'react';
import RoomSelector from 'editor/room-selector';
import YearSelector from 'editor/year-selector';
import Calendar from 'editor/calendar/calendar';
import SpotsEditor from 'editor/form/spots-editor';

export default class RoomsEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeYear: new Date().getFullYear(),
      selectedDays: [],
      lastSelectedDay: null,
    };

    this.handleActiveYearChanged = this.handleActiveYearChanged.bind(this);
    this.handleOnDaySelected = this.handleOnDaySelected.bind(this);
    this.handleCalendarClick = this.handleCalendarClick.bind(this);
  }

  handleActiveYearChanged(activeYear) {
    this.setState({
      activeYear,
      selectedDays: [],
      lastSelectedDay: null,
    });
  }

  handleOnDaySelected(e, day, month) {
    e.stopPropagation();
    const shiftKey = e.shiftKey;
    this.setState(prevState => {
      if (!shiftKey || prevState.lastSelectedDay === null) {
        return {
          selectedDays: [[month, day]],
          lastSelectedDay: [month, day],
        };
      }

      const [prevMonth, prevDay] = prevState.lastSelectedDay;
      const selectedDays = [];

      if (prevMonth === month) {
        for (let i = prevDay; i <= day; i++) {
          selectedDays.push([month, i]);
        }
      } else {
        for (let i = prevDay; i <= 31; i++) {
          selectedDays.push([prevMonth, i]);
        }
        if (Math.abs(prevMonth - month) > 1) {
          for (let i = prevMonth + 1; i <= month - 1; i++) {
            for (let j = 1; j <= 31; j++) {
              selectedDays.push([i, j]);
            }
          }
        }
        for (let i = 1; i <= day; i++) {
          selectedDays.push([month, i]);
        }
      }

      return {
        selectedDays: selectedDays,
        lastSelectedDay: [month, day],
      };
    });
  }

  handleCalendarClick() {
    this.setState({
      selectedDays: [],
      lastSelectedDay: null,
    });
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
              <YearSelector year={this.state.activeYear}
                            onYearChanged={this.handleActiveYearChanged}/>
            </div>
          </div>

          <Calendar year={this.state.activeYear}
                    selectedDays={this.state.selectedDays}
                    onDaySelected={this.handleOnDaySelected}
                    onCalendarClick={this.handleCalendarClick}/>

        </div>
        <div className="column">

          <SpotsEditor hasSelectedDays={this.state.selectedDays.length > 0}/>

        </div>
      </div>
    );
  }
}
