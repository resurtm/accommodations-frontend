import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {registerUser} from 'actions/auth';
import RegisterForm from './register-form';

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn,
    error: state.auth.signingUpError,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: ({username, email, password}) => {
      dispatch(registerUser(username, email, password));
    },
  };
};

const SignupPage = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterForm));

export default SignupPage
