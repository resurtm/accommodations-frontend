import React from 'react';
import PropTypes from 'prop-types';
import Field from 'auth/field';
import TosAgreement from 'auth/tos-agreement';
import Buttons from 'auth/buttons';

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      passwordRepeat: '',
      tosAgreement: false,
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
    this.props.onSubmit(this.state);
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
    return (
      <div className="columns">
        <div className="column is-one-third is-offset-one-third">
          <h1 className="title">Create a New Account</h1>
          <form onSubmit={this.handleSubmit}>
            <Field label="Username" placeholder="JohnDoe1980" state="success" leftIcon="user"
                   errorText="This username is available" value={this.state.username}
                   onChange={this.onUsernameChange}/>
            <Field type="email" label="Email" placeholder="johndoe1980@gmail.com" state="danger"
                   leftIcon="envelope" errorText="This email is invalid"
                   helpText="We will never share your email with anyone" value={this.state.email}
                   onChange={this.onEmailChange}/>
            <Field type="password" label="Password" placeholder="s3cr3tpa$$w0rd" leftIcon="key"
                   state="success" value={this.state.password} onChange={this.onPasswordChange}/>
            <Field type="password" label="Password Repeat" placeholder="s3cr3tpa$$w0rd" leftIcon="key"
                   helpText="Your password once again" state="danger" value={this.state.passwordRepeat}
                   onChange={this.onPasswordRepeatChange}/>
            <TosAgreement status={this.state.tosAgreement} onChange={this.onTosAgreementChange}/>
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
