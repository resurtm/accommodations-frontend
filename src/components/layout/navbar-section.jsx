import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {logoutUser} from 'actions/auth';
import NavbarBlock from './navbar-block';

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    loggedIn: state.auth.loggedIn,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogoutClick: () => {
      dispatch(logoutUser());
    },
  };
};

const NavbarSection = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavbarBlock));

export default NavbarSection
