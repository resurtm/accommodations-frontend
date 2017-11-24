import React from 'react';

export default class YearSelector extends React.Component {
  render() {
    return (
      <div className="field">
        <label className="label">Select Room:</label>
        <div className="control">
          <div className="field is-grouped">
            <div className="control">
              <button className="button">2016</button>
            </div>
            <div className="control">
              <button className="button">2017</button>
            </div>
            <div className="control">
              <button className="button is-info">2018</button>
            </div>
            <div className="control">
              <button className="button">2019</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
