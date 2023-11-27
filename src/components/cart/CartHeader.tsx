import styled from "styled-components"
import { theme } from "../../theme/theme";
import { formatPrice, replaceDot } from "../../utils/math";

type Props = {
  total: number;
}

function CartHeader(props: Props) {
  const { total } = props;

  return (
    <HeaderContainer>
      <h1>Total</h1>
      <p>{replaceDot(formatPrice(total))}€</p>
    </HeaderContainer>
  )
}

export default CartHeader

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 10px;
  background-color: ${theme.colors.background_dark};
  color: ${theme.colors.primary};
  font-family: 'Pacifico', cursive;
  font-size: ${theme.fonts.size.P3};
`;