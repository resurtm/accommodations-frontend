import React from 'react';
import _ from 'lodash';
import Month from 'editor/calendar/month';

export default class Calendar extends React.Component {
  render() {
    const months = _.range(1, 5).map(i =>
      _.range((i - 1) * 3 + 1, (i - 1) * 3 + 4)
    );

    const selectedDays = {};
    _.forEach(this.props.selectedDays, ([month, day]) => {
      if (!(month in selectedDays)) {
        selectedDays[month] = [];
      }
      selectedDays[month].push(day);
    });

    return (
      <div id="calendar" onClick={this.props.onCalendarClick}>
        {months.map((group, groupIndex) =>
          <div key={groupIndex} className="columns">
            {group.map((month, monthIndex) =>
              <div key={monthIndex} className="column is-one-third">
                <Month month={month}
                       year={this.props.year}
                       selectedDays={month in selectedDays ? selectedDays[month] : []}
                       onDaySelected={this.props.onDaySelected}/>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
