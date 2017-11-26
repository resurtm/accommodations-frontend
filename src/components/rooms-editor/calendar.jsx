import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CalendarMonth from './calendar-month';
import {typedArrayOfLength} from 'tools/propTypes';

export default function Calendar(props) {
  const monthGroups = _.range(1, 4 + 1).map(i => (
    _.range((i - 1) * 3 + 1, (i - 1) * 3 + 4)
  ));

  const selectedDays = {}, spots = {};
  _.forEach(_.range(1, 12 + 1), month => {
    selectedDays[month] = [];
    spots[month] = {};
  });
  _.forEach(props.selectedDays, ([month, day]) => {
    selectedDays[month].push(day);
  });
  props.spots.forEach((value, key) => {
    spots[key[0]][key[1]] = value;
  });

  return props.activeRoom === 0 || !props.activeRoom ? (
    <NotSelectedNotice>In order to be able to edit calendar spots please
      select one of the room above in the drop down list</NotSelectedNotice>
  ) : (
    <Container onClick={() => props.onCalendarClick()}>
      {monthGroups.map((monthGroup, key) => (
        <div key={key} className="columns">
          {monthGroup.map(month => (
            <div key={month} className="column is-one-third">
              <CalendarMonth month={month}
                             year={props.activeYear}
                             selectedDays={selectedDays[month]}
                             spots={spots[month]}
                             onDaySelected={props.onDaySelected}/>
            </div>
          ))}
        </div>
      ))}
    </Container>
  );
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

const NotSelectedNotice = styled.p`
  margin-top: 30px;
  margin-bottom: 30px;
`;
