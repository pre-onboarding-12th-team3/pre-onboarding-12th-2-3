import '@/App.css';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

import { Heading } from './components/common';

function App() {
  return (
    <>
      <Heading>React/Facebook</Heading>
      <Main>
        <Outlet />
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 70%;
  min-height: 100vh;
`;

export default App;
