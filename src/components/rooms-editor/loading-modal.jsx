import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import preloaderImg from 'img/preloader.gif';

export default class LoadingModal extends React.Component {
  render() {
    return !this.props.isLoading ? null : (
      <Div>
        <Img src={preloaderImg}/>
      </Div>
    );
  }
}

LoadingModal.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

const Div = styled.div`
  width: 300px;
  height: 200px;

  position: absolute;
  left: 50%;
  top: 200px;
  margin-top: -100px;
  margin-left: -150px;

  background: white;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

const Img = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -42px;
  margin-left: -42px;
`;
