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

const Preloader = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoadingModal);

export default Preloader
