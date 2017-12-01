import {connect} from 'react-redux';
import LoginForm from './login-form';

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: formData => {
      console.log(formData);
    },
  };
};

const SigninPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);

export default SigninPage
