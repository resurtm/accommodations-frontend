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
    this.props.onDaySelected(e.shiftKey, this.props.day);
  }

  render() {
    return this.props.day === -1
      ? <td className="has-text-centered">&nbsp;</td>
      : (
        <Td className="has-text-centered"
            selected={this.props.selected}
            onClick={this.handleClick}>
          {this.props.day}
        </Td>
      );
  }
}

CalendarDay.propTypes = {
  day: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  onDaySelected: PropTypes.func.isRequired,
};

const Td = styled.td`
  cursor: pointer;
  color: ${p => p.selected ? 'white' : 'inherit'};
  background: ${p => p.selected ? 'lightcoral' : 'none'};
  font-weight: ${p => p.selected ? 'bold' : 'normal'};
`;
