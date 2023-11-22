import styled from "styled-components";
import { theme } from "../../theme/theme";
import { useContext } from "react";
import { AdminTabContext, isOpenContext } from "./AdminPanel";
import { SelectedTabContextType, isOpenContextType } from "../../types/admin";

type Props = {
  id: number;
  title: string;
  icon: JSX.Element;
  isSelected: boolean;
}

function AdminTab(props: Props) {
  const { id, title, icon, isSelected } = props;
  const { selectedTab, setSelectedTab } = useContext(AdminTabContext) as SelectedTabContextType;
  const { setIsOpen } = useContext(isOpenContext) as isOpenContextType;

  const handleSelection = () => {
    setSelectedTab(id);
    selectedTab !== id && setIsOpen(true);
  }

  return (
    <Tab
      $isSelected={isSelected}
      onClick={handleSelection}
    >
      {icon} {title}
    </Tab>
  )
}

export default AdminTab

const Tab = styled.p<{ $isSelected: boolean }>`
  cursor: pointer;

  height: 40px;

  padding: 0 30px;

  background-color: ${props => props.$isSelected ? theme.colors.background_dark : theme.colors.background_white};
  border: 1px solid ${theme.colors.greyLight};
  color: ${props => props.$isSelected ? theme.colors.white : theme.colors.greyMedium};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  font-family: 'Open Sans', sans-serif;
`;