import React from 'react';
import styled from 'styled-components';
import RoomsEditor from 'containers/rooms-editor';
import Preloading from 'containers/tools/preloading';
import ErrorMessage from 'containers/tools/error-message';

export default function MainContainer(props) {
  return (
    <div>
      <Container className="container">
        <div className="columns">
          <div className="column">
            <RoomsEditor/>
          </div>
        </div>
      </Container>
      <Preloading/>
      <ErrorMessage/>
    </div>
  );
}

const Container = styled.div`
  margin-top: 75px;
  margin-bottom: 75px;
`;
