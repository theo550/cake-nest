import styled from "styled-components";
import { theme } from "../../theme/theme";
import CartHeader from "../cart/CartHeader";
import CartContent from "../cart/CartContent";

type Props = {
  children: JSX.Element;
}

function Main(props: Props) {
  const { children } = props;

  return (
    <Container>
      <CartContainer>
        <CartHeader/>
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