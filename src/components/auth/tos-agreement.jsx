import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function TosAgreement(props) {
  return (
    <StyledField className="field">
      <div className="control">
        <label className="checkbox">
          <input type="checkbox"
                 checked={props.status}
                 onChange={() => props.onChange(!props.status)}/>
          {' '}
          I agree to the
          {' '}
          <a href="#">Terms and Conditions</a>
        </label>
      </div>
    </StyledField>
  );
}

TosAgreement.propTypes = {
  status: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

const StyledField = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
`;
