import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../../theme/theme';
import Header from './Header';
import Main from '../../main/Main';

function Layout() {
  return (
    <LayoutContainer>
      <MainContainer>
        <Header/>
        <Main>
          <Outlet/>
        </Main>
      </MainContainer>
    </LayoutContainer>
  )
}

export default Layout

const LayoutContainer = styled.div`
  height: 100vh;
  background-color: ${theme.colors.primary};

  font-family: 'Open Sans', sans-serif;

  display: flex;
  flex-direction: column;
`;

const MainContainer = styled.div`
  padding: 50px;

  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;