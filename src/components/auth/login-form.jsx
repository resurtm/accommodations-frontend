import React from 'react';
import {Redirect} from 'react-router';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import _ from 'lodash';
import Field from './field';
import Buttons from './buttons';

const validationRules = {
  email: {
    presence: true,
    length: {minimum: 5, maximum: 50},
    email: true,
  },
  password: {
    presence: true,
    length: {minimum: 6, maximum: 255},
  },
};

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      errors: {'email': nextProps.error},
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const errors = validate(_.pick(this.state, ['email', 'password']), validationRules);
    this.setState({errors});

    if (!errors) {
      this.props.onSubmit(this.state);
    }
  }

  onEmailChange(email) {
    this.setState({email});
  }

  onPasswordChange(password) {
    this.setState({password});
  }

  render() {
    if (this.props.loggedIn) {
      return <Redirect to="/" push={true}/>;
    }

    const emailHasErrors = this.state.errors && 'email' in this.state.errors;
    const passwordHasErrors = this.state.errors && 'password' in this.state.errors;

    return (
      <div className="columns">
        <div className="column is-one-third is-offset-one-third">
          <h1 className="title">Log into Your Account</h1>
          <form onSubmit={this.handleSubmit}>
            <Field type="email" label="Email" placeholder="johndoe1980@gmail.com" onChange={this.onEmailChange}
                   value={this.state.email} leftIcon="envelope" helpText="Your email you've used when signed up"
                   state={emailHasErrors ? 'danger' : null}
                   errorText={this.state.errors && 'email' in this.state.errors ? this.state.errors.email : null}/>
            <Field type="password" label="Password" placeholder="s3cr3tpa$$w0rd" onChange={this.onPasswordChange}
                   value={this.state.password} leftIcon="key"
                   state={passwordHasErrors ? 'danger' : null}
                   errorText={passwordHasErrors ? this.state.errors.password : null}/>
            <Buttons submitButtonLabel="Login"/>
          </form>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

LoginForm.defaultProps = {
  error: null,
};
