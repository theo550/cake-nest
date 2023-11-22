import styled from 'styled-components';
import cake from '../../assets/cupcake.png';
import { theme } from '../../theme/theme';

function Logo() {
  return (
    <LogoContainer>Cake<span><img src={cake} alt="" /></span>Nest</LogoContainer>
  )
}

export default Logo

const LogoContainer = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.primary};
  text-transform: uppercase;
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.medium};
  font-family: 'Open Sans', sans-serif;

  span {
    img {
      height: 40px;
      margin: 0 10px;
    }
  }
`;