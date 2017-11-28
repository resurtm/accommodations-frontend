import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CalendarMonth from './calendar-month';
import {typedArrayOfLength} from 'tools/prop-types';

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
  _.forEach(props.spots, (value, key) => {
    const [month, day] = key.split('.');
    spots[parseInt(month, 10)][parseInt(day, 10)] = value;
  });

  return props.activeRoom === 0 || !props.activeRoom ? (
    <Note>
      In order to be able to edit calendar spots please
      select one of the room above in the drop down list
    </Note>
  ) : (
    <div>
      <Note>
        Single mouse button <strong>Click</strong> to select day.
        {' '}
        <strong>Shift + Click</strong> to select interval.
        {' '}
        <strong>Ctrl + Click</strong> to select multiple independent days.
      </Note>
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
    </div>
  );
}

Calendar.propTypes = {
  activeRoom: PropTypes.number.isRequired,
  activeYear: PropTypes.number.isRequired,
  selectedDays: PropTypes.arrayOf(typedArrayOfLength.bind(null, 'number', 2)).isRequired,
  spots: PropTypes.objectOf(
    PropTypes.shape({
      status: PropTypes.string.isRequired,
      count: PropTypes.number,
      price: PropTypes.number,
    }).isRequired,
  ).isRequired,
  onDaySelected: PropTypes.func.isRequired,
  onCalendarClick: PropTypes.func.isRequired,
};

const Container = styled.div`
  user-select: none;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Note = styled.p`
  margin-top: 15px;
  margin-bottom: 15px;
`;
