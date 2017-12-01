import React from 'react';
import {Redirect} from 'react-router';
import PropTypes from 'prop-types';
import Field from 'auth/field';
import Buttons from 'auth/buttons';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
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

    return (
      <div className="columns">
        <div className="column is-one-third is-offset-one-third">
          <h1 className="title">Log into Your Account</h1>
          <form onSubmit={this.handleSubmit}>
            <Field type="email" label="Email" placeholder="johndoe1980@gmail.com" state="danger"
                   leftIcon="envelope" errorText="This email is invalid"
                   helpText="Your email you've used when signed up" value={this.state.email}
                   onChange={this.onEmailChange}/>
            <Field type="password" label="Password" placeholder="s3cr3tpa$$w0rd" leftIcon="key"
                   state="success" value={this.state.password} onChange={this.onPasswordChange}/>
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
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
