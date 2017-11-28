import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function CalendarDay(props) {
  return props.day === -1
    ? (
      <td className="has-text-centered">&nbsp;</td>
    ) : (
      <Td className="has-text-centered"
          selected={props.selected}
          opened={props.spot.status === 'open'}
          closed={props.spot.status === 'close'}
          onClick={e => {
            e.stopPropagation();
            props.onDaySelected(e.shiftKey, e.ctrlKey, props.day)
          }}>
        {props.day}
      </Td>
    );
}

CalendarDay.propTypes = {
  day: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  spot: PropTypes.shape({
    status: PropTypes.string.isRequired,
  }).isRequired,
  onDaySelected: PropTypes.func.isRequired,
};

const Td = styled.td`
  cursor: pointer;
  color: ${p => p.selected ? 'white' : 'inherit'};
  font-weight: ${p => p.opened || p.closed || p.selected ? 'bold' : 'normal'};
  background: ${p => ({
    [true]: 'none',
    [p.opened]: 'lightgreen',
    [p.closed]: 'lightblue',
    [p.selected]: 'lightcoral',
  }.true)};
`;
