import React from 'react'
import PropTypes from 'prop-types'

export default function LoginFormField(props) {
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

  return (
    <div className="field">
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

      {props.errorText === null ? null :
        <p className={props.state === null ? 'help' : 'help is-' + props.state}>
          {props.errorText}
        </p>
      }
    </div>
  );
}

LoginFormField.propTypes = {
  state: PropTypes.string,

  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,

  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,

  helpText: PropTypes.string,
  errorText: PropTypes.string,

  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
};

LoginFormField.defaultProps = {
  state: null,

  type: 'text',
  placeholder: '',

  leftIcon: null,
  rightIcon: null,

  helpText: null,
  errorText: null,
};
