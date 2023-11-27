import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import CartHeader from "../cart/CartHeader";
import CartContent from "../cart/CartContent";
import { CartContextType } from "../../types/cart";
import { CartContext } from "../../context/cartContext";
import { calculateTotalPrice } from "../../utils/math";

type Props = {
  children: JSX.Element;
}

function Main(props: Props) {
  const { children } = props;

  const [total, setTotal] = useState(0);

  const { cart } = useContext(CartContext) as CartContextType;

  useEffect(() => {
    setTotal(calculateTotalPrice(cart));
  }, [cart])

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
  background-color: #fff;

  border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};

  box-shadow: inset 0px 0px 50px 0px rgba(0,0,0,0.3);
  -webkit-box-shadow: inset 0px 0px 50px 0px rgba(0,0,0,0.3);
  -moz-box-shadow: inset 0px 0px 50px 0px rgba(0,0,0,0.3);

  overflow: hidden;

  display: flex;
`;

const CartContainer = styled.div`
  width: 800px;
  height: 100%;

  display: flex;
  flex-direction: column;
`;