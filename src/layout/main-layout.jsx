import React from 'react';

export default class MainLayout extends React.Component {
  render() {
    return (
      <div className="container" id="main-layout">
        <div className="columns">
          <div className="column">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
