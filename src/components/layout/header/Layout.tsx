import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../../theme/theme';
import Header from './Header';
import Main from '../../main/Main';
import AdminPanel from '../../admin/AdminPanel';
import { useContext } from 'react';
import { AdminContext } from '../../../App';
import { AdminContextType } from '../../../types/admin';

function Layout() {
  const { isAdmin } = useContext(AdminContext) as AdminContextType;

  return (
    <LayoutContainer>
      <MainContainer>
        <Header/>
        <Main>
          <ContentContainer>
            <Outlet/>
            {isAdmin &&
              <AdminPanel/>
            }
          </ContentContainer>
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

  height: 1px;
`;

const ContentContainer = styled.div`
  position: relative;
`;