import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LoginField from './login-form-field';

export default class LoginForm extends React.Component {
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

  onTosAgreementChange() {
    this.setState(state => ({tosAgreement: !state.tosAgreement}));
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-one-third is-offset-one-third">
          <h1 className="title">Create a New Account</h1>
          <form onSubmit={this.handleSubmit}>

            <StyledLoginField label="Username" placeholder="JohnDoe1980" state="success" leftIcon="user"
                              errorText="This username is available" value={this.state.username}
                              onChange={this.onUsernameChange}/>
            <StyledLoginField type="email" label="Email" placeholder="johndoe1980@gmail.com" state="danger"
                              leftIcon="envelope" errorText="This email is invalid"
                              helpText="We will never share your email with anyone" value={this.state.email}
                              onChange={this.onEmailChange}/>
            <StyledLoginField type="password" label="Password" placeholder="s3cr3tpa$$w0rd" leftIcon="key"
                              state="success" value={this.state.password} onChange={this.onPasswordChange}/>
            <StyledLoginField type="password" label="Password Repeat" placeholder="s3cr3tpa$$w0rd" leftIcon="key"
                              helpText="Your password once again" state="danger" value={this.state.passwordRepeat}
                              onChange={this.onPasswordRepeatChange}/>

            <StyledField className="field">
              <div className="control">
                <label className="checkbox">
                  <input type="checkbox" checked={this.state.tosAgreement} onChange={this.onTosAgreementChange}/>
                  {' '}
                  I agree to the
                  {' '}
                  <a href="#">Terms and Conditions</a>
                </label>
              </div>
            </StyledField>

            <StyledField className="field is-grouped">
              <div className="control">
                <button type="submit" className="button is-link">Submit</button>
              </div>
              <div className="control">
                <button type="reset" className="button is-text">Cancel</button>
              </div>
            </StyledField>

          </form>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const StyledLoginField = styled(LoginField)`
  margin-top: 30px;
  margin-bottom: 30px;
`;

const StyledField = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;
