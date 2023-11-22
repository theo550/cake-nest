import styled from 'styled-components'
import { theme } from '../../theme/theme';
import { useContext } from 'react';
import { AdminTabContext, isOpenContext } from './AdminPanel';
import { SelectedTabContextType, isOpenContextType } from '../../types/admin';
import AddProduct from '../../page/admin/AddProduct';
import UpdateProduct from '../../page/admin/UpdateProduct';

function AdminContent() {
  const { selectedTab } = useContext(AdminTabContext) as SelectedTabContextType;
  const { isOpen } = useContext(isOpenContext) as isOpenContextType;

  return isOpen && (
    <AdminContentContainer $isOpen={isOpen}>
      {selectedTab === 0 &&
        <AddProduct/>
      }

      {selectedTab === 1 &&
        <UpdateProduct/>
      }
    </AdminContentContainer>
  )
}

export default AdminContent

const AdminContentContainer = styled.div<{ $isOpen: boolean }>`
  background-color: ${theme.colors.background_white};
  height: ${props => props.$isOpen ? '200px' : 0};
  transition: all .4s;
`;