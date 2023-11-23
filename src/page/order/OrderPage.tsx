import { useState } from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";
import { menuContext } from "../../context/menuContext";
import { fakeMenu2 } from "../../data/fakeMenu"

function OrderPage() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <OrderContainer>
      <menuContext.Provider value={{ menu, setMenu }}>
        <MenuItem/>
      </menuContext.Provider>
    </OrderContainer>
  )
}

export default OrderPage;

const OrderContainer = styled.div`
  padding: 50px 50px 150px;
  flex-grow: 1;

  overflow: scroll;
`;