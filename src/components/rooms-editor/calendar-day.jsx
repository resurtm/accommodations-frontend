import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default class CalendarDay extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.stopPropagation();
    this.props.onDaySelected(e.shiftKey, e.ctrlKey, this.props.day);
  }

  render() {
    return this.props.day === -1
      ? <td className="has-text-centered">&nbsp;</td>
      : (
        <Td className="has-text-centered"
            selected={this.props.selected}
            opened={this.props.spot.status === 'open'}
            closed={this.props.spot.status === 'close'}
            onClick={this.handleClick}>
          {this.props.day}
        </Td>
      );
  }
}

CalendarDay.propTypes = {
  day: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  spot: PropTypes.shape({
    status: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
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
