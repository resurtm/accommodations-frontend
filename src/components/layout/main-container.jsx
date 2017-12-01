import React from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import NavbarSection from './navbar-section';
import Footer from './footer';
import StandardLayout from './standard-layout';

import Home from 'components/pages/home';
import RoomsEditor from 'containers/rooms-editor';
import Accommodations from 'components/accommodations';

import SigninPage from 'components/auth/signin-page';
import SignupPage from 'components/auth/signup-page';

import Preloading from 'containers/tools/preloading';
import ErrorMessage from 'containers/tools/error-message';

import {checkUserAuth} from 'actions/auth';

class BaseMainContainer extends React.Component {
  componentWillMount() {
    if (this.props.loggedIn) {
      this.props.checkUserAuth();
    }
  }

  render() {
    return (
      <div>
        <NavbarSection/>

        <Route exact path="/" component={Home}/>
        <Route path="/spots" component={StandardLayout(RoomsEditor)}/>
        <Route path="/accommodations" component={StandardLayout(Accommodations)}/>

        <Route path="/login" component={StandardLayout(SigninPage)}/>
        <Route path="/register" component={StandardLayout(SignupPage)}/>

        <Footer/>
        <Preloading/>
        <ErrorMessage/>
      </div>
    );
  }
}

BaseMainContainer.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  checkUserAuth: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkUserAuth: () => {
      dispatch(checkUserAuth());
    },
  };
};

const MainContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(BaseMainContainer));

export default MainContainer
