import React, {Component} from 'react';
import {render} from 'react-dom';

import './style.css';

class Cell extends Component {
  render() {
    return (
      <td onClick={this.props.onClick}>{this.props.value}</td>
    )
  }
}

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ],
      nextItem: 'X',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, i, j) {
    this.setState(prevState => {
      if (prevState.items[i][j] !== '') {
        return {};
      }
      const items = prevState.items.slice();
      items[i][j] = prevState.nextItem;
      const nextItem = prevState.nextItem === 'O' ? 'X' : 'O';
      return {items, nextItem};
    });
  }

  render() {
    const cells = this.state.items.map((cols, i) =>
      <tr key={i}>
        {cols.map((col, j) =>
          <Cell key={j} value={col} onClick={e => this.handleClick(e, i, j)}/>
        )}
      </tr>
    );

    return (
      <table border="1" cellPadding="10" cellSpacing="0">
        <tbody>
        {cells}
        </tbody>
      </table>
    );
  }
}

export default class Hello extends Component {
  render() {
    return (
      <div>
        <Board/>
      </div>
    );
  }
}

render(<Hello/>, document.getElementById('app'));
