import React from 'react';
import PropTypes from 'prop-types';
import CalendarDay from './calendar-day';
import {daysInMonth, monthNames, shortWeekDays, weekDay} from 'tools/dateTime';

export default class CalendarMonth extends React.Component {
  constructor(props) {
    super(props);
    this.handleDaySelected = this.handleDaySelected.bind(this);
  }

  handleDaySelected(isRange, day) {
    this.props.onDaySelected(isRange, this.props.month, day);
  }

  render() {
    const name = monthNames()[this.props.month];
    const count = daysInMonth(this.props.month, this.props.year);
    const day = weekDay(1, this.props.month, this.props.year);

    const weeks = [];
    let week = [];
    for (let i = 0; i < day - 1; i++) {
      week.push(-1);
    }
    for (let i = 0, j = day - 1; i < count; i++, j++) {
      if (j === 7) {
        j = 0;
        weeks.push(week);
        week = [];
      }
      week.push(i + 1);
    }
    if (week.length > 0) {
      weeks.push(week);
    }

    return (
      <div>
        <h2 className="subtitle">{name}</h2>
        <table className="table is-fullwidth is-narrow">
          <thead>
          <tr>
            {shortWeekDays().map(weekDay =>
              <th key={weekDay} className="has-text-centered">{weekDay}</th>
            )}
          </tr>
          </thead>
          <tbody>
          {weeks.map((week, weekIndex) =>
            <tr key={weekIndex}>
              {week.map((day, dayIndex) =>
                <CalendarDay key={dayIndex}
                             day={day}
                             selected={this.props.selectedDays.indexOf(day) !== -1}
                             onDaySelected={this.handleDaySelected}/>
              )}
            </tr>
          )}
          </tbody>
        </table>
      </div>
    );
  }
}

CalendarMonth.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  selectedDays: PropTypes.arrayOf(PropTypes.number).isRequired,
  onDaySelected: PropTypes.func.isRequired,
};
