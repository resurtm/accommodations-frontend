import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function SpotsSpecsForm(props) {
  if (!props.hasSelectedDays) {
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

SpotsSpecsForm.propTypes = {
  hasSelectedDays: PropTypes.bool.isRequired,
};

const Field = styled.div`
  padding-bottom: 20px;
`;
