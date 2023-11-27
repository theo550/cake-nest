import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import CartHeader from "../cart/CartHeader";
import CartContent from "../cart/CartContent";
import { calculateTotalPrice } from "../../utils/math";
import { menuContext } from "../../context/menuContext";
import { MenuContextType } from "../../types/menu";
import { CartContext } from "../../context/cartContext";
import { CartContextType } from "../../types/cart";

type Props = {
  children: JSX.Element;
}

function Main(props: Props) {
  const { children } = props;

  const [total, setTotal] = useState(0);

  const { menu } = useContext(menuContext) as MenuContextType;
  const { cart } = useContext(CartContext) as CartContextType;

  useEffect(() => {
    setTotal(calculateTotalPrice(menu, cart));
  }, [menu, cart])

  return (
    <Container>
      <CartContainer>
        <CartHeader
          total={total}
        />
        <CartContent/>
      </CartContainer>
      {children}
    </Container>
  )
}

export default Main

const Container = styled.div`
  height: 100%;
  background-color: ${theme.colors.white};

  border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};

  box-shadow: inset 0px 0px 50px 0px rgba(0,0,0,0.3);
  -webkit-box-shadow: inset 0px 0px 50px 0px rgba(0,0,0,0.3);
  -moz-box-shadow: inset 0px 0px 50px 0px rgba(0,0,0,0.3);

  overflow: hidden;

  display: flex;
`;

const CartContainer = styled.div`
  min-width: 370px;
  max-width: 370px;
  height: 100%;

  display: flex;
  flex-direction: column;
`;