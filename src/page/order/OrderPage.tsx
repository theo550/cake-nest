import styled from "styled-components";
import MenuItem from "./MenuItem";
import { useContext } from "react";
import { menuContext } from "../../context/menuContext";
import { MenuContextType } from "../../types/menu";
import EmptyPage from "./EmptyPage";

function OrderPage() {
  const { menu } = useContext(menuContext) as MenuContextType;
  return (
    <OrderContainer>
      {menu.length > 0
        ?  <MenuItem/>
        : <EmptyPage/>
      }
    </OrderContainer>
  )
}

export default OrderPage;

const OrderContainer = styled.div`
  padding: 50px 50px 150px;
  flex-grow: 1;

  overflow: scroll;
`;