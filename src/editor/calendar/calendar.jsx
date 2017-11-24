import React from 'react';
import _ from 'lodash';
import Month from 'editor/calendar/month';

export default class Calendar extends React.Component {
  render() {
    const months = _.range(1, 5).map(i =>
      _.range((i - 1) * 3 + 1, (i - 1) * 3 + 4)
    );

    return (
      <div id="calendar">

        {months.map((group, groupIndex) =>
          <div key={groupIndex} className="columns">
            {group.map((month, monthIndex) =>
              <div key={monthIndex} className="column is-one-third">
                <Month month={month} year={this.props.year}/>
              </div>
            )}
          </div>
        )}

      </div>
    );
  }
}
