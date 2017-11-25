import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NonSelectedRoomNotice from './non-selected-room-notice';
import CalendarMonth from './calendar-month';
import {typedArrayOfLength} from 'tools/propTypes';

export default class Calendar extends React.Component {
  render() {
    const monthGroups = _.range(1, 4 + 1).map(i => (
      _.range((i - 1) * 3 + 1, (i - 1) * 3 + 4)
    ));

    const selectedDays = {}, spots = {};
    _.forEach(_.range(1, 12 + 1), month => {
      selectedDays[month] = [];
      spots[month] = {};
    });
    _.forEach(this.props.selectedDays, ([month, day]) => {
      selectedDays[month].push(day);
    });
    this.props.spots.forEach((value, key) => {
      spots[key[0]][key[1]] = value;
    });

    return this.props.activeRoom === 0 || !this.props.activeRoom ? (
      <NonSelectedRoomNotice/>
    ) : (
      <Container onClick={() => this.props.onCalendarClick()}>
        {monthGroups.map((monthGroup, key) => (
          <div key={key} className="columns">
            {monthGroup.map(month => (
              <div key={month} className="column is-one-third">
                <CalendarMonth month={month}
                               year={this.props.activeYear}
                               selectedDays={selectedDays[month]}
                               spots={spots[month]}
                               onDaySelected={this.props.onDaySelected}/>
              </div>
            ))}
          </div>
        ))}
      </Container>
    );
  }
}

Calendar.propTypes = {
  activeRoom: PropTypes.number.isRequired,
  activeYear: PropTypes.number.isRequired,
  selectedDays: PropTypes.arrayOf(typedArrayOfLength.bind(null, 'number', 2)).isRequired,
  spots: PropTypes.instanceOf(Map).isRequired,
  onDaySelected: PropTypes.func.isRequired,
  onCalendarClick: PropTypes.func.isRequired,
};

const Container = styled.div`
  user-select: none;
  margin-top: 30px;
  margin-bottom: 30px;
`;
