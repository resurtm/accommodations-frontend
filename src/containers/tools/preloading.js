import {connect} from 'react-redux';
import LoadingModal from 'components/tools/loading-modal';
import Immutable from 'seamless-immutable';

const mapStateToProps = state => {
  return Immutable({
    isLoading: state.isLoading,
  });
};

const mapDispatchToProps = dispatch => {
  return {};
};

const Preloading = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoadingModal);

export default Preloading
