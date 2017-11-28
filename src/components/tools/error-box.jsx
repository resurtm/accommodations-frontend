import Immutable from 'seamless-immutable';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default class ErrorBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = Immutable({
      errorMessage: props.errorMessage,
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState(Immutable({
      errorMessage: nextProps.errorMessage,
    }));
  }

  render() {
    return this.state.errorMessage.length === 0 ? null : (
      <Wrapper>
        <div className="container">
          <div className="columns">
            <div className="column">
              <Icon className="fa fa-exclamation-triangle" aria-hidden="true"/>
              {this.state.errorMessage}
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

ErrorBox.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  padding: 25px 0;
  background: red;
  color: white;
  font-weight: bold;
  font-size: 30px;
`;

const Icon = styled.i`
  margin-right: 25px;
`;
