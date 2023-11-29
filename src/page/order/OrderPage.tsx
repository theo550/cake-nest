import styled from "styled-components";
import MenuItem from "./MenuItem";
import { useContext, useEffect } from "react";
import EmptyPage from "./EmptyPage";
import { getUser } from "../../api/user";
import { UserContext } from "../../context/userContext";
import { UserContextType, UserType } from "../../types/user";
import { menuContext } from "../../context/menuContext";
import { MenuContextType } from "../../types/menu";

function OrderPage() {
  const { setUser } = useContext(UserContext) as UserContextType;
  const { menu, setMenu } = useContext(menuContext) as MenuContextType;

  useEffect(() => {
    const currentUserName = localStorage.getItem('user');
    if (currentUserName) {
      const currentUser = getUser(JSON.parse(currentUserName).user_name);
      currentUser.then(data => {
        if (data) {
          setUser(data as UserType);
          setMenu(data.menu);
        }
      });
    }
  }, [setUser, setMenu]);

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
  height: 100%;

  display: flex;
`;

const MenuContainer = styled.div`
  padding: 50px;
  overflow: scroll;
`;
