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
      
      <MenuContainer>
        {menu.length > 0
          ?  <MenuItem/>
          : <EmptyPage/>
        }
      </MenuContainer>
    </OrderContainer>
  )
}

export default OrderPage;

const OrderContainer = styled.div`
  /* flex-grow: 1; */
  height: 100%;

  display: flex;
`;

const MenuContainer = styled.div`
  padding: 50px;
  overflow: scroll;
`;
