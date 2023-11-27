import { useContext } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import { SelectedMenuContextType, isOpenContextType } from "../../types/admin";
import { isOpenContext } from "../../context/isOpenContext";
import { SelectedMenuContext } from "../../context/menuContext";
import { nullMenuType } from "../../types/menu";

function AdminArrow() {
  const { isOpen, setIsOpen } = useContext(isOpenContext) as isOpenContextType;
  const { setSelectedMenu } = useContext(SelectedMenuContext) as SelectedMenuContextType;

  const handlePanel = () => {
    setIsOpen(!isOpen);
    setSelectedMenu(nullMenuType);
  }

  return (
    <ArrowContainer onClick={handlePanel}>
      {isOpen 
      ? <FiChevronDown/>
      : <FiChevronUp/>
    }
    </ArrowContainer>
  )
}

export default AdminArrow

const ArrowContainer = styled.div`
  border: 1px solid ${theme.colors.greyLight};
  border-radius: ${theme.borderRadius.round};
  background-color: ${theme.colors.white};
  color: ${theme.colors.greyMedium};
  width: 60px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;