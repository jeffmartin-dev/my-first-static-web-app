import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 400px;
  height: 400px;
  border: 2px solid red;
`;

function App() {
  const value = 'Jeff';
  return (
    <Wrapper>
      <div>Hello {value}</div>
    </Wrapper>
  );
}

export default App;
