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

class TemperatureInput extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChanged(e.target.value, this.props.value);
  }

  render() {
    return (
      <input type="text" value={this.props.value} onChange={this.handleChange}/>
    );
  }
}

function fahrToCels(x) {
  const v = parseFloat(x);
  return isNaN(v) ? x : v * 9 / 5 + 32;
}

function celsToFahr(x) {
  const v = parseFloat(x);
  return isNaN(v) ? x : v * 1.8 + 32;
}

class TemperatureConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 100,
      type: 'c',
    };
    this.handleTemperatureChange = this.handleTemperatureChange.bind(this);
  }

  handleTemperatureChange(value, type) {
    this.setState({value, type});
  }

  render() {
    const celsValue = this.state.type === 'c' ? this.state.value : fahrToCels(this.state.value);
    const fahrValue = this.state.type === 'f' ? this.state.value : celsToFahr(this.state.value);

    return (
      <div>
        <TemperatureInput type="c" value={celsValue}
                          onTemperatureChanged={v => this.handleTemperatureChange(v, 'c')}/>
        <TemperatureInput type="f" value={fahrValue}
                          onTemperatureChanged={v => this.handleTemperatureChange(v, 'f')}/>
      </div>
    );
  }
}

export default class Hello extends Component {
  render() {
    return (
      <div>
        <Board/>
        <TemperatureConvertor/>
      </div>
    );
  }
}

render(<Hello/>, document.getElementById('app'));
