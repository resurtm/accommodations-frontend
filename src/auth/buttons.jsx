import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Buttons(props) {
  return (
    <StyledField className="field is-grouped">
      <div className="control">
        <button type="submit" className="button is-link">{props.submitButtonLabel}</button>
      </div>
      <div className="control">
        <button type="reset" className="button is-text">{props.resetButtonLabel}</button>
      </div>
    </StyledField>
  );
}

Buttons.propTypes = {
  submitButtonLabel: PropTypes.string,
  resetButtonLabel: PropTypes.string,
};

Buttons.defaultProps = {
  submitButtonLabel: 'Submit',
  resetButtonLabel: 'Reset',
};

const StyledField = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
`;
