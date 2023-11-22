import styled from 'styled-components'
import AdminNavigation from './AdminNavigation';
import { createContext } from 'react';
import { useState } from 'react';
import { SelectedTabContextType } from '../../types/admin';
import AdminContent from './AdminContent';
import { isOpenContext } from '../../context/isOpenContext';

export const AdminTabContext = createContext<SelectedTabContextType | null>(null);

function AdminPanel() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AdminContainer>
      <AdminTabContext.Provider value={{ selectedTab, setSelectedTab }}>
        <isOpenContext.Provider value={{ isOpen, setIsOpen }}>
          <AdminNavigation/>
          <AdminContent/>
        </isOpenContext.Provider>
      </AdminTabContext.Provider>
    </AdminContainer>
  )
}

export default AdminPanel

const AdminContainer = styled.div`
  bottom: 0;
  left: 0;
  position: sticky;
`;