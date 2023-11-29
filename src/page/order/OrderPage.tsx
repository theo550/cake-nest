import styled from "styled-components";
import MenuItem from "./MenuItem";
import { useContext } from "react";
import { menuContext } from "../../context/menuContext";
import { MenuContextType } from "../../types/menu";
import EmptyPage from "./EmptyPage";
import { getUser } from "../../api/user";

function OrderPage() {
  const { menu } = useContext(menuContext) as MenuContextType;

  const user = getUser('ZotQScpCKHTNftJUIGSz');
  user.then(data => console.log(data?.user_name));

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
