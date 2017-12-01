import {connect} from 'react-redux';
import {loginUser} from 'actions/auth';
import LoginForm from 'auth/login-form';

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: ({email, password}) => {
      dispatch(loginUser(email, password));
    },
  };
};

const SigninPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm);

export default SigninPage
