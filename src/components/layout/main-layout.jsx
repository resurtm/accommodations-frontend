import React from 'react';
import styled from 'styled-components';

export default function MainLayout(props) {
  return (
    <Container className="container">
      <div className="columns">
        <div className="column">
          {props.children}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 75px;
  margin-bottom: 75px;
`;
