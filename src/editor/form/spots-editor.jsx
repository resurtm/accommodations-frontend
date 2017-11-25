import React from 'react';
import styled from 'styled-components';

export default class SpotsEditor extends React.Component {
  render() {
    if (!this.props.hasSelectedDays) {
      return null;
    }

    return (
      <div id="spots-editor">
        <Field className="field">
          <label className="label">Spots Status:</label>
          <div className="control">
            <div className="select is-fullwidth">
              <select>
                <option>Not defined</option>
                <option>Open</option>
                <option>Closed</option>
              </select>
            </div>
          </div>
        </Field>

        <Field className="field">
          <label className="label">Spots Available:</label>
          <div className="control">
            <input className="input" type="number" placeholder="Spots Available"/>
          </div>
        </Field>

        <Field className="field">
          <label className="label">Price per Spot:</label>
          <div className="control">
            <input className="input" type="number" placeholder="Price per Spot"/>
          </div>
        </Field>

        <Field className="field is-grouped">
          <div className="control">
            <button className="button is-info">Apply</button>
          </div>
          <div className="control">
            <button className="button is-text">Cancel</button>
          </div>
        </Field>
      </div>
    );
  }
}

const Field = styled.div`
  margin-bottom: 30px;
`;
