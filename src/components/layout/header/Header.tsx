import Logo from "../../ui/Logo";
import styled from "styled-components";
import { theme } from "../../../theme/theme";
import UserDetails from "../../user/UserDetails";

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <UserDetails/>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 30px;
`;