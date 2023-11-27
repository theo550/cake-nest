import styled from "styled-components"
import { theme } from "../../theme/theme";

function CartContent() {
  return (
    <CartContainer>
      <p>Votre commande est vide.</p>
    </CartContainer>
  )
}

export default CartContent

const CartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-grow: 1;

  box-shadow: inset 0px 0px 50px 0px rgba(0,0,0,0.3);
  -webkit-box-shadow: inset 0px 0px 50px 0px rgba(0,0,0,0.3);
  -moz-box-shadow: inset 0px 0px 50px 0px rgba(0,0,0,0.3);

  p {
    font-family: 'Pacifico', cursive;
    color: ${theme.colors.greyMedium};
    font-size: ${theme.fonts.size.P3};
  }
`;