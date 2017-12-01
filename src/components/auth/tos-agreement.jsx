import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {renderErrorText} from "./tools";

export default function TosAgreement(props) {
  return (
    <StyledField className="field">
      <div className="control">
        <label className="checkbox">
          <input type="checkbox"
                 checked={props.value}
                 onChange={() => props.onChange(!props.value)}/>
          {' '}
          I agree to the
          {' '}
          <a href="#">Terms and Conditions</a>
        </label>
      </div>
      {renderErrorText(props.errorText, props.state)}
    </StyledField>
  );
}

TosAgreement.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired,
  state: PropTypes.string,
  errorText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

TosAgreement.defaultProps = {
  state: null,
  errorText: null,
};

const StyledField = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
`;
