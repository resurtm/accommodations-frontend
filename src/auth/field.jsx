import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Field(props) {
  let rightIcon = props.rightIcon === null ? null : props.rightIcon;
  if (props.rightIcon === null && props.state !== null) {
    switch (props.state) {
      case 'success':
        rightIcon = 'check';
        break;
      case 'danger':
        rightIcon = 'warning';
        break;
    }
  }

  const controlClasses = ['control'];
  if (props.leftIcon !== null) {
    controlClasses.push('has-icons-left');
  }
  if (rightIcon !== null) {
    controlClasses.push('has-icons-right');
  }

  let errorText = null;
  if (props.errorText !== null) {
    if (Array.isArray(props.errorText)) {
      errorText = [];
      _.forEach(props.errorText, (v, k) => {
        errorText.push(<p key={k} className={props.state === null ? 'help' : 'help is-' + props.state}>{v}</p>);
      });
    } else {
      errorText = <p className={props.state === null ? 'help' : 'help is-' + props.state}>{props.errorText}</p>;
    }
  }

  return (
    <StyledField className="field">
      <label className="label">{props.label}:</label>

      <div className={controlClasses.join(' ')}>
        <input className={props.state === null ? 'input' : 'input is-' + props.state}
               type={props.type}
               placeholder={props.placeholder}
               value={props.value}
               onChange={e => props.onChange(e.target.value)}/>

        {props.leftIcon === null ? null :
          <span className="icon is-small is-left">
            <i className={'fa fa-' + props.leftIcon} aria-hidden="true"/>
          </span>
        }

        {rightIcon === null ? null :
          <span className="icon is-small is-right">
            <i className={'fa fa-' + rightIcon} aria-hidden="true"/>
          </span>
        }
      </div>

      {props.helpText === null ? null :
        <p className="help">
          {props.helpText}
        </p>
      }

      {errorText}
    </StyledField>
  );
}

Field.propTypes = {
  state: PropTypes.string,

  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,

  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,

  helpText: PropTypes.string,
  errorText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),

  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
};

Field.defaultProps = {
  state: null,

  type: 'text',
  placeholder: '',

  leftIcon: null,
  rightIcon: null,

  helpText: null,
  errorText: null,
};

const StyledField = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
`;
