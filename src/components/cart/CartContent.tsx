import { useContext } from "react";
import styled from "styled-components"
import { theme } from "../../theme/theme";
import { CartContextType } from "../../types/cart";
import { CartContext } from "../../context/cartContext";
import CartItem from "./CartItem";

function CartContent() {
  const { cart } = useContext(CartContext) as CartContextType;

  return (
    <CartContainer>
      {cart.length > 0 &&
        <CartList>
          {cart.map(item => {
            return (
              <CartItem
                key={Math.random()}
                item={item}
              />
            )
          })}
        </CartList>
      }

      {cart.length === 0 &&
        <TextContainer>
          <p>Votre commande est vide.</p>
        </TextContainer>
      }
    </CartContainer>
  )
}

export default CartContent

const CartContainer = styled.div`
  display: flex;
  justify-content: center;

  flex-grow: 1;

  box-shadow: inset 0px 0px 30px 0px rgba(0,0,0,0.1);
  -webkit-box-shadow: inset 0px 0px 30px 0px rgba(0,0,0,0.1);
  -moz-box-shadow: inset 0px 0px 30px 0px rgba(0,0,0,0.1);

  overflow: scroll;
`;

const CartList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 10px;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-family: 'Pacifico', cursive;
    color: ${theme.colors.greyMedium};
    font-size: ${theme.fonts.size.P3};
  }
`;