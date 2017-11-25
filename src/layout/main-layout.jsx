import React from 'react';
import styled from 'styled-components';

export default class MainLayout extends React.Component {
  render() {
    return (
      <Container className="container">
        <div className="columns">
          <div className="column">
            {this.props.children}
          </div>
        </div>
      </Container>
    );
  }
}

const Container = styled.div`
  margin-top: 75px;
  margin-bottom: 75px;
`;
