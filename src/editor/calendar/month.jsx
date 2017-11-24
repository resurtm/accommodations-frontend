import React from 'react';
import Day from 'editor/calendar/day';
import {daysInMonth, shortWeekDays, weekDay, monthNames} from 'tools';

export default class Month extends React.Component {
  render() {
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
        <h2 className="subtitle">{monthNames()[this.props.month]}</h2>
        <table className="table is-fullwidth is-narrow">
          <thead>
          <tr>
            {shortWeekDays().map((weekDay, key) =>
              <th key={key} className="has-text-centered">{weekDay}</th>
            )}
          </tr>
          </thead>

          <tbody>
          {weeks.map((week, weekKey) =>
            <tr key={weekKey}>
              {week.map((day, dayKey) =>
                <Day key={dayKey}
                     day={day}
                     daySelected={this.props.selectedDays.indexOf(day) !== -1}
                     onDaySelected={(e, day) => this.props.onDaySelected(e, day, this.props.month)}/>
              )}
            </tr>
          )}
          </tbody>
        </table>
      </div>
    );
  }
}
