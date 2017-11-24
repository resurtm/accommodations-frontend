import React from 'react';

export default class Calendar extends React.Component {
  render() {
    return (
      <div id="calendar">

        <div className="columns">
          <div className="column is-one-third">
            <div className="tile is-primary">
              test
            </div>
          </div>
          <div className="column is-one-third">
            2
          </div>
          <div className="column is-one-third">
            3
          </div>
        </div>

        <div className="columns">
          <div className="column is-one-third">
            1
          </div>
          <div className="column is-one-third">
            2
          </div>
          <div className="column is-one-third">
            3
          </div>
        </div>

        <div className="columns">
          <div className="column is-one-third">
            1
          </div>
          <div className="column is-one-third">
            2
          </div>
          <div className="column is-one-third">
            3
          </div>
        </div>

      </div>
    );
  }
}
