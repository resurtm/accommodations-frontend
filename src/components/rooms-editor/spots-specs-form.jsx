import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Immutable from 'seamless-immutable';

export default class SpotsSpecsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = Immutable({
      status: '',
      count: 0,
      price: 0.0,
    });

    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleCountChange = this.handleCountChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
  }

  handleStatusChange(e) {
    this.setState(Immutable({
      status: e.target.value,
    }));
  }

  handleCountChange(e) {
    const count = parseInt(e.target.value, 10);
    this.setState(Immutable({
      count: isNaN(count) ? 0 : count,
    }));
  }

  handlePriceChange(e) {
    const price = parseFloat(e.target.value);
    this.setState(Immutable({
      price: isNaN(price) ? 0.0 : price,
    }));
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.props.onApply(this.state);
  }

  handleCancelClick(e) {
    this.props.onReset();
  }

  render() {
    return (
      <form id="spots-editor" onSubmit={this.handleFormSubmit}>
        <Field className="field">
          <label className="label">Spots Status:</label>
          <div className="control">
            <div className="select is-fullwidth">
              <select value={this.state.status} onChange={this.handleStatusChange}>
                <option value="">Not Defined</option>
                <option value="open">Open</option>
                <option value="close">Closed</option>
              </select>
            </div>
          </div>
        </Field>

        <Field className="field">
          <label className="label">Spots Available:</label>
          <div className="control">
            <input className="input" type="number" placeholder="Spots Available"
                   value={this.state.count} onChange={this.handleCountChange}/>
          </div>
        </Field>

        <Field className="field">
          <label className="label">Price per Spot:</label>
          <div className="control">
            <input className="input" type="number" placeholder="Price per Spot"
                   value={this.state.price} onChange={this.handlePriceChange}/>
          </div>
        </Field>

        <Field className="field is-grouped">
          <div className="control">
            <button className="button is-info" type="submit">Apply</button>
          </div>
          <div className="control">
            <button className="button is-text" type="reset" onClick={this.handleCancelClick}>Cancel</button>
          </div>
        </Field>
      </form>
    );
  }
}

SpotsSpecsForm.propTypes = {
  onApply: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

const Field = styled.div`
  padding-bottom: 20px;
`;
