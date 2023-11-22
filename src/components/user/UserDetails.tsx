import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import { Link } from "react-router-dom";
import { PiUserCircleFill } from "react-icons/pi";

function UserDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  useEffect(() => {
    !state && navigate('/');
  }, [state, navigate]);

  return state && (
    <UserDetailsContainer>
      <PiUserCircleFill size={theme.fonts.size.P5}/>
      <div>
        <h1>Salut <span>{state.name}</span></h1>
        <Link to='/'>Se déconnecter</Link>
      </div>
    </UserDetailsContainer>
  )
}

export default UserDetails

const UserDetailsContainer = styled.div`
  text-align: end;
  color: ${theme.colors.greyBlue};

  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  div {
    margin-right: 20px;

    h1 {
      margin-bottom: 7px;
      span {
        color: ${theme.colors.primary};
        font-weight: ${theme.fonts.weights.bold};
      }
    }

    a {
      text-decoration: none;
      color: ${theme.colors.greyBlue};
      font-size: ${theme.fonts.size.XS};
    }
  }
`;