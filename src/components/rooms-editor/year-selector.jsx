import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

export default function YearSelector(props) {
  const currentYear = new Date().getFullYear();
  const years = _.range(currentYear - 1, currentYear + 4);

  return (
    <div className="field">
      <label className="label">Select Year:</label>
      <div className="control">
        <div className="field is-grouped">
          {years.map(year =>
            <div key={year} className="control">
              <button className={year === props.year ? 'button is-info' : 'button'}
                      onClick={() => props.onYearChanged(year)}>
                {year}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

YearSelector.propTypes = {
  year: PropTypes.number.isRequired,
  onYearChanged: PropTypes.func.isRequired,
};
