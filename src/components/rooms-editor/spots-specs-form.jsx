import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Immutable from 'seamless-immutable';

export default class SpotsSpecsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = Immutable(props.initialSpot);

    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleCountChange = this.handleCountChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(Immutable(nextProps.initialSpot));
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
    this.props.onApply(Immutable(this.state));
  }

  handleCancelClick(e) {
    this.props.onReset();
  }

  render() {
    return (
      <form id="spots-editor" onSubmit={this.handleFormSubmit}>
        <Field className="field">
          <label className="label">Spots Status:</label>
          <div className="control has-icons-left">
            <div className="select is-fullwidth">
              <select value={this.state.status} onChange={this.handleStatusChange}>
                <option value="">Not Defined</option>
                <option value="open">Open</option>
                <option value="close">Closed</option>
              </select>
            </div>
            <span className="icon is-left"><i className="fa fa-cog" aria-hidden="true"/></span>
          </div>
        </Field>

        <Field className="field">
          <label className="label">Spots Available:</label>
          <div className="control has-icons-left">
            <input className="input" type="number" placeholder="Spots Available"
                   value={this.state.count ? this.state.count : ''} onChange={this.handleCountChange}/>
            <span className="icon is-left"><i className="fa fa-hashtag" aria-hidden="true"/></span>
          </div>
        </Field>

        <Field className="field">
          <label className="label">Price per Spot:</label>
          <div className="control has-icons-left">
            <input className="input" type="number" placeholder="Price per Spot"
                   value={this.state.price ? this.state.price : ''} onChange={this.handlePriceChange}/>
            <span className="icon is-left"><i className="fa fa-usd" aria-hidden="true"/></span>
          </div>
        </Field>

        <Field className="field is-grouped">
          <div className="control">
            <button className="button is-info" type="submit">
              <span className="icon"><i className="fa fa-check"/></span>
              <span>Apply</span>
            </button>
          </div>
          <div className="control">
            <button className="button" type="reset" onClick={this.handleCancelClick}>
              <span className="icon"><i className="fa fa-times"/></span>
              <span>Cancel</span>
            </button>
          </div>
        </Field>
      </form>
    );
  }
}

SpotsSpecsForm.propTypes = {
  initialSpot: PropTypes.shape({
    status: PropTypes.string.isRequired,
    count: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
  onApply: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

const Field = styled.div`
  padding-bottom: 20px;
`;
