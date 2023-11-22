import styled from 'styled-components'
import AdminNavigation from './AdminNavigation';
import { createContext } from 'react';
import { useState } from 'react';
import { SelectedTabContextType } from '../../types/admin';

export const AdminTabContext = createContext<SelectedTabContextType | null>(null);

function AdminPanel() {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <AdminContainer>
      <AdminTabContext.Provider value={{ selectedTab, setSelectedTab }}>
        <AdminNavigation/>
      </AdminTabContext.Provider>
    </AdminContainer>
  )
}

export default AdminPanel

const AdminContainer = styled.div`
  position: fixed;
  left: 150px;
  bottom: 50px;
`;