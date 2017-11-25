import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

export default class YearSelector extends React.Component {
  render() {
    const currentYear = new Date().getFullYear();
    const years = _.range(currentYear - 1, currentYear + 4);

    return (
      <div className="field">
        <label className="label">Select Room:</label>
        <div className="control">
          <div className="field is-grouped">
            {years.map(year =>
              <div key={year} className="control">
                <button className={year === this.props.year ? 'button is-info' : 'button'}
                        onClick={() => this.props.onYearChanged(year)}>
                  {year}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

YearSelector.propTypes = {
  year: PropTypes.number.isRequired,
};
