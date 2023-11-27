import { useContext } from "react";
import styled from "styled-components"
import { theme } from "../../theme/theme";
import CartItem from "./CartItem";
import { CartContext } from "../../context/cartContext";
import { CartContextType } from "../../types/cart";

function CartContent() {
  const { cart } = useContext(CartContext) as CartContextType;

  return (
    <CartContainer>
      {cart.filter(item => item.quantity > 0).length > 0 &&
        <CartList>
          {cart.map(item => {
            return item.quantity > 0 && (
              <CartItem
                key={Math.random()}
                item={item}
              />
            )
          })}
        </CartList>
      }

      {cart.filter(item => item.quantity > 0).length === 0 &&
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
  flex-direction: column-reverse;
  align-items: center;
  justify-content: flex-end;

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