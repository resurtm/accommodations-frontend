import React from 'react';
import PropTypes from 'prop-types';
import Field from './field';
import TosAgreement from './tos-agreement';
import Buttons from './buttons';
import validate from "validate.js/validate";

const validationRules = {
  username: {
    presence: true,
    length: {minimum: 5, maximum: 50},
    format: {
      pattern: '^[A-Za-z0-9_-]{5,50}$',
      message: '^Invalid username',
    },
  },
  email: {
    presence: true,
    length: {minimum: 5, maximum: 50},
    email: true,
  },
  password: {
    presence: true,
    length: {minimum: 6, maximum: 255},
  },
  passwordRepeat: {
    presence: true,
    length: {minimum: 6, maximum: 255},
    equality: 'password',
  },
  tosAgreement: {
    presence: true,
    inclusion: {
      within: [true],
      message: '^You must accept out terms of service',
    }
  },
};

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      passwordRepeat: '',
      tosAgreement: false,
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onPasswordRepeatChange = this.onPasswordRepeatChange.bind(this);
    this.onTosAgreementChange = this.onTosAgreementChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const errors = validate(_.omit(this.state, ['errors']), validationRules);
    this.setState({errors});
    if (!errors) {
      this.props.onSubmit(_.pick(this.state, ['username', 'email', 'password']));
    }
  }

  onUsernameChange(username) {
    this.setState({username});
  }

  onEmailChange(email) {
    this.setState({email});
  }

  onPasswordChange(password) {
    this.setState({password});
  }

  onPasswordRepeatChange(passwordRepeat) {
    this.setState({passwordRepeat});
  }

  onTosAgreementChange(tosAgreement) {
    this.setState({tosAgreement});
  }

  render() {
    const usernameHasErrors = this.state.errors && 'username' in this.state.errors;
    const emailHasErrors = this.state.errors && 'email' in this.state.errors;
    const passwordHasErrors = this.state.errors && 'password' in this.state.errors;
    const passwordRepeatHasErrors = this.state.errors && 'passwordRepeat' in this.state.errors;
    const tosAgreementErrors = this.state.errors && 'tosAgreement' in this.state.errors;

    return (
      <div className="columns">
        <div className="column is-one-third is-offset-one-third">
          <h1 className="title">Create a New Account</h1>
          <form onSubmit={this.handleSubmit}>
            <Field label="Username" placeholder="JohnDoe1980" leftIcon="user"
                   value={this.state.username} onChange={this.onUsernameChange}
                   errorText={usernameHasErrors ? this.state.errors.username : null}
                   state={usernameHasErrors ? 'danger' : null}/>
            <Field type="email" label="Email" placeholder="johndoe1980@gmail.com" leftIcon="envelope"
                   value={this.state.email} onChange={this.onEmailChange}
                   helpText="We will never share your email with anyone"
                   errorText={emailHasErrors ? this.state.errors.email : null}
                   state={emailHasErrors ? 'danger' : null}/>
            <Field type="password" label="Password" placeholder="s3cr3tpa$$w0rd" leftIcon="key"
                   value={this.state.password} onChange={this.onPasswordChange}
                   errorText={passwordHasErrors ? this.state.errors.password : null}
                   state={passwordHasErrors ? 'danger' : null}/>
            <Field type="password" label="Password Repeat" placeholder="s3cr3tpa$$w0rd" leftIcon="key"
                   value={this.state.passwordRepeat} onChange={this.onPasswordRepeatChange}
                   helpText="Your password once again"
                   errorText={passwordRepeatHasErrors ? this.state.errors.passwordRepeat : null}
                   state={passwordRepeatHasErrors ? 'danger' : null}/>
            <TosAgreement value={this.state.tosAgreement} onChange={this.onTosAgreementChange}
                          errorText={tosAgreementErrors ? this.state.errors.tosAgreement : null}
                          state={tosAgreementErrors ? 'danger' : null}/>
            <Buttons submitButtonLabel="Register"/>
          </form>
        </div>
      </div>
    );
  }
}

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
