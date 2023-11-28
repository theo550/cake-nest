import styled from 'styled-components'
import AdminNavigation from './AdminNavigation';
import { createContext } from 'react';
import { SelectedTabContextType } from '../../types/admin';
import AdminContent from './AdminContent';

export const AdminTabContext = createContext<SelectedTabContextType | null>(null);

function AdminPanel() {
  return (
    <AdminContainer>
      <AdminNavigation/>
      <AdminContent/>
    </AdminContainer>
  )
}

export default AdminPanel

const AdminContainer = styled.div`
  bottom: 0;
  left: 0;
  position: sticky;
  overflow: none;
`;