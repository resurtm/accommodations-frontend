import {connect} from 'react-redux';
import RegisterForm from './register-form';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (data) => {
      console.log(data);
    },
  };
};

const SignupPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterForm);

export default SignupPage
