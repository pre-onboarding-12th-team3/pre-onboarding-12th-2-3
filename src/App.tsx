import '@/App.css';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

import { Header } from './components/common';

function App() {
  return (
    <>
      <Header />
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
