import styled from 'styled-components';
import { theme } from '../../theme/theme';
import cake from '../../assets/cupcake.png';

const LoginHeader = () => {
  return (
    <LoginContainer>
      <Logo>Cake<span><img src={cake} alt="" /></span>Nest</Logo>
      <Title>Bienvenue chez nous !</Title>
    </LoginContainer>
  )
}

export default LoginHeader

const LoginContainer = styled.div`
  z-index: 999;
`;

const Title = styled.h1`
  font-family: 'Pacifico', cursive;
  color: ${theme.colors.white};
  font-size: ${theme.fonts.size.P5};
  margin: ${theme.gridUnit * 5}px 0;
`;

const Logo = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.primary_cake};
  text-transform: uppercase;
  font-size: ${theme.fonts.size.P5};
  font-weight: ${theme.fonts.weights.medium};
  font-family: 'Open Sans', sans-serif;
  margin-bottom: 100px;

  span {
    img {
      height: 50px;
      margin: 0 10px;
    }
  }
`;