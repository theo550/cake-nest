import styled from "styled-components";
import AdminArrow from "./AdminArrow";
import AdminTab from "./AdminTab";
import { AiOutlinePlus } from 'react-icons/ai';
import { MdModeEditOutline } from 'react-icons/md';
import { useContext } from "react";
import { AdminTabContext } from "./AdminPanel";
import { SelectedTabContextType } from "../../types/admin";

function AdminNavigation() {
  const { selectedTab } = useContext(AdminTabContext) as SelectedTabContextType;

  const adminTabs = [
    {
      id: 0,
      title: 'Ajouter un produit',
      icon: <AiOutlinePlus/>
    },
    {
      id: 1,
      title: 'Modifier un produit',
      icon: <MdModeEditOutline/>
    }
  ]

  return (
    <AdminNav>
      <AdminArrow/>
      {adminTabs.map(tab => {
        return (
          <AdminTab
            key={tab.id}
            id={tab.id}
            title={tab.title}
            icon={tab.icon}
            isSelected={selectedTab === tab.id}
          />
        )
      })}
    </AdminNav>
  )
}

export default AdminNavigation

const AdminNav = styled.li`
  display: flex;
  align-items: center;
  margin-left: 100px;
`;