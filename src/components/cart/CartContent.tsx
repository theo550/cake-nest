import styled from "styled-components"
import { theme } from "../../theme/theme";
import { useContext } from "react";
import { CartContextType } from "../../types/cart";
import { CartContext } from "../../context/cartContext";
import CartItem from "./CartItem";

function CartContent() {
  const { cart } = useContext(CartContext) as CartContextType;

  return (
    <CartContainer>
      {cart.length > 0 &&
        <div>
          {cart.map(item => {
            return (
              <CartItem item={item}/>
            )
          })}
        </div>
      }

      {cart.length === 0 &&
        <p>Votre commande est vide.</p>
      }
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