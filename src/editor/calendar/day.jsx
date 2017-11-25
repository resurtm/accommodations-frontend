import React from 'react';
import styled from 'styled-components';

export default class Month extends React.Component {
  render() {
    return this.props.day === -1 ? (
      <td className="has-text-centered">
        &nbsp;
      </td>
    ) : (
      <Td className="has-text-centered"
          selected={this.props.daySelected}
          onClick={e => this.props.onDaySelected(e, this.props.day)}>
        {this.props.day}
      </Td>
    );
  }
}

const Td = styled.td`
  cursor: pointer;
  color: ${p => p.selected ? 'white' : 'inherit'};
  background: ${p => p.selected ? 'lightcoral' : 'none'};
  font-weight: ${p => p.selected ? 'bold' : 'normal'};
`;
