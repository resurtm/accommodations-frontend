import React from 'react';
import {daysInMonth, shortWeekDays, weekDay} from 'tools';

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
      <table className="table">
        <thead>
        <tr>
          {shortWeekDays().map((weekDay, key) =>
            <th key={key}>{weekDay}</th>
          )}
        </tr>
        </thead>

        <tbody>
        {weeks.map((week, weekKey) =>
          <tr key={weekKey}>
            {week.map((day, dayKey) =>
              <td key={dayKey} className="has-text-centered">{day === -1 ? '' : day}</td>
            )}
          </tr>
        )}
        </tbody>
      </table>
    );
  }
}
