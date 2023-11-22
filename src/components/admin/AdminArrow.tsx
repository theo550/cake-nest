import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styled from "styled-components";
import { theme } from "../../theme/theme";

function AdminArrow() {
  const [open, setOpen] = useState(true);

  const handlePanel = () => {
    setOpen(!open);
  }

  return (
    <ArrowContainer onClick={handlePanel}>
      {open 
      ? <FiChevronUp/>
      : <FiChevronDown/>
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