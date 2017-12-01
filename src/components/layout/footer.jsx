import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <Wrapper className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>
            <strong>Accommodations</strong> by <a href="http://resurtm.com">resurtm</a>
            <br/>
            The source code is licensed under
            {' '}
            <a href="http://opensource.org/licenses/mit-license.php" rel="license">MIT</a>
            <br/>
            The website content is licensed under
            {' '}
            <a href="http://creativecommons.org/licenses/by/4.0/" rel="license">CC BY 4.0</a>
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: none;
`;
