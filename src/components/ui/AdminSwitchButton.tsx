import { useState } from "react";
import { showNotification } from "../../utils/toasts"
import { ToastContainer } from 'react-toastify'
import styled from "styled-components";
import { theme } from "../../theme/theme";

function AdminSwitchButton() {
  const [isAdmin, setIsAdmin] = useState(false);

  const handleNotification = () => {
    showNotification({ isAdmin });
    setIsAdmin(!isAdmin)
  }

  return (
    <StyledButton onClick={handleNotification}>
      <Round $isAdmin={isAdmin}/>
      <p>{isAdmin ? 'Désactiver' : 'Activer'} le mode admin</p>
      <ToastContainer/>
    </StyledButton>
  )
}

export default AdminSwitchButton

const StyledButton = styled.div`
  border-radius: 50px;
  border: none;
  background-color: ${theme.colors.background_dark};
  color: ${theme.colors.primary};
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  font-size: ${theme.fonts.size.XS};
  padding: 5px;

  text-align: center;

  display: flex;
  align-items: center;

  cursor: pointer;
`;

const Round = styled.div<{ $isAdmin: boolean }>`
  height: 40px;
  width: 40px;

  background-color: ${props => props.$isAdmin ? theme.colors.primary : theme.colors.greyLight};
  border-radius: ${theme.borderRadius.circle};
`;