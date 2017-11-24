import React from 'react';

export default class Month extends React.Component {
  render() {
    return this.props.day === -1 ? (
      <td className="has-text-centered">
        &nbsp;
      </td>
    ) : (
      <td className={this.props.daySelected
        ? 'selected-day standard-day has-text-centered'
        : 'standard-day has-text-centered'}
          onClick={e => this.props.onDaySelected(e, this.props.day)}>
        {this.props.day}
      </td>
    );
  }
}
