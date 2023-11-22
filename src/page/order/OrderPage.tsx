import styled from "styled-components";
import MenuItem from "./MenuItem";

function OrderPage() {
  return (
    <OrderContainer>
      <MenuItem/>
    </OrderContainer>
  )
}

export default OrderPage;

const OrderContainer = styled.div`
  padding: 50px 50px 150px;
  flex-grow: 1;

  overflow: scroll;
`;