import React from 'react';
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
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-one-third is-offset-one-third">
          <h1 className="title">Create a New Account</h1>
          <form onSubmit={this.handleSubmit}>

            <StyledLoginField label="Username" placeholder="JohnDoe1980" state="success" leftIcon="user"
                              errorText="This username is available"/>
            <StyledLoginField type="email" label="Email" placeholder="johndoe1980@gmail.com" state="danger"
                              leftIcon="envelope" errorText="This email is invalid"
                              helpText="We will never share your email with anyone"/>
            <StyledLoginField type="password" label="Password" placeholder="s3cr3tpa$$w0rd" leftIcon="key"
                              state="success"/>
            <StyledLoginField type="password" label="Password Repeat" placeholder="s3cr3tpa$$w0rd" leftIcon="key"
                              helpText="Your password once again" state="danger"/>

            <StyledField className="field">
              <div className="control">
                <label className="checkbox">
                  <input type="checkbox"/>
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

const StyledLoginField = styled(LoginField)`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const StyledField = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;
