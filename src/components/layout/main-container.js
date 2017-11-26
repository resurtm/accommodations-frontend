import React from 'react';
import styled from 'styled-components';
import RoomsEditor from 'containers/rooms-editor';
import Preloader from 'containers/tools/preloader';

export default function MainContainer(props) {
  return (
    <Container className="container">
      <div className="columns">
        <div className="column">
          <RoomsEditor/>
        </div>
      </div>
      <Preloader/>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 75px;
  margin-bottom: 75px;
`;
