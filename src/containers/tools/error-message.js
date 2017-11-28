import {connect} from 'react-redux';
import ErrorBox from 'components/tools/error-box';
import Immutable from 'seamless-immutable';

const mapStateToProps = state => {
  return Immutable({
    errorMessage: state.errorMessage,
  });
};

const mapDispatchToProps = dispatch => {
  return Immutable({});
};

const ErrorMessage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ErrorBox);

export default ErrorMessage
