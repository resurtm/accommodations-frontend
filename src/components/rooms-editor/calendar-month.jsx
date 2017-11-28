import React from 'react';
import PropTypes from 'prop-types';
import CalendarDay from './calendar-day';
import {daysInMonth, monthNames, shortWeekDays, weekDay} from 'tools/date-time';
import {nullSpot} from 'tools/spots';

export default function CalendarMonth(props) {
  const count = daysInMonth(props.month, props.year);
  const day = weekDay(1, props.month, props.year);
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
      <h2 className="subtitle">{monthNames()[props.month]}</h2>
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
                           selected={props.selectedDays.indexOf(day) !== -1}
                           spot={day in props.spots ? props.spots[day] : nullSpot()}
                           onDaySelected={(isRange, isMultiple, day) => {
                             props.onDaySelected(isRange, isMultiple, props.month, day)
                           }}/>
            )}
          </tr>
        )}
        </tbody>
      </table>
    </div>
  );
}

CalendarMonth.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  selectedDays: PropTypes.arrayOf(PropTypes.number).isRequired,
  spots: PropTypes.objectOf(
    PropTypes.shape({
      status: PropTypes.string.isRequired,
      count: PropTypes.number,
      price: PropTypes.number,
    }).isRequired,
  ).isRequired,
  onDaySelected: PropTypes.func.isRequired,
};
