import React from 'react';
import styled from 'styled-components';

export default class NonSelectedRoomNotice extends React.Component {
  render() {
    return (
      <P>In order to be able to edit calendar spots please
        select one of the room above in the drop down list</P>
    );
  }
}

const P = styled.p`
  margin-top: 30px;
  margin-bottom: 30px;
`;
