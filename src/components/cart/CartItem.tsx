import styled from "styled-components";
import { MenuContextType, nullMenuType } from "../../types/menu"
import { theme } from "../../theme/theme";
import { formatPrice, replaceDot } from "../../utils/math";
import DeleteButtonItemCard from "./DeleteButtonItemCard";
import './cart-item.css'
import { CartContextType, CartType } from "../../types/cart";
import { useContext, useMemo } from "react";
import { SelectedMenuContext, menuContext } from "../../context/menuContext";
import { CartContext } from "../../context/cartContext";
import cupcake from '../../../public/images/cupcake-item.png';
import { AdminContextType, SelectedMenuContextType, SelectedTabContextType, isOpenContextType } from "../../types/admin";
import { AdminContext } from "../../App";
import { AdminTabContext } from "../admin/AdminPanel";
import { isOpenContext } from "../../context/isOpenContext";
import { HighlightedContext } from "../../context/highlight";
import { highlightContextType } from "../../types/highlight";

type Props = {
  item: CartType;
}
function CartItem(props: Props) {
  const { item } = props;

  const { menu } = useContext(menuContext) as MenuContextType;
  const { cart } = useContext(CartContext) as CartContextType;
  const { selectedMenu, setSelectedMenu } = useContext(SelectedMenuContext) as SelectedMenuContextType;
  const { isAdmin } = useContext(AdminContext) as AdminContextType;
  const { setSelectedTab } = useContext(AdminTabContext) as SelectedTabContextType;
  const { setIsOpen } = useContext(isOpenContext) as isOpenContextType;
  const { discount } = useContext(HighlightedContext) as highlightContextType;

  const cartItem = menu.find(menu => menu.id === item.id);
  const cartQuantity = cart.find(cart => cart.id === item.id)?.quantity

  const handleSelectCard = () => {
    if (isAdmin) {
      setSelectedMenu(menu.find(menu => menu.id === item.id) || nullMenuType);
      setSelectedTab(1);
      setIsOpen(true);
    }
  }

  const discountValue = useMemo(() => (discount.find(d => d.id === item.id)?.amount || 0) / 100, [discount, item.id]);

  return cartItem && cartQuantity && (
    <CartItemContainer
      className="cart-item__container"
      onClick={handleSelectCard}
      $isselected={selectedMenu.id === item.id}
    >
        <img src={cartItem.imageSource || cupcake} alt="" />
        <TitleContainer>
          <h3>{cartItem.title}</h3>
          {menu.find(menu => menu.id === item.id)?.isAvailable
            ? <p>{replaceDot(formatPrice(cartItem.price * cartQuantity - (cartItem.price * cartQuantity * discountValue)))}€</p>
            : <p>Non disponible</p>
          }
        </TitleContainer>
        <p>x{cartQuantity}</p>
        <DeleteContainer className="cart-item__container--delete">
          <DeleteButtonItemCard
            id={cartItem.id}
          />
        </DeleteContainer>
    </CartItemContainer>
  )
}

export default CartItem

const CartItemContainer = styled.div<{ $isselected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${props => props.$isselected ? theme.colors.primary : theme.colors.white};

  margin: 10px 0;
  padding: 10px;

  width: 85%;
  height: 60px;
  border-radius: ${theme.borderRadius.round};

  box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.1);
  -webkit-box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.1);
  -moz-box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.1);

  position: relative;

  overflow: hidden;

  cursor: pointer;
  transition: all .2s;

  &:hover {
    transform: scale(1.03);
  }

  p {
    color: ${props => props.$isselected ? theme.colors.white : theme.colors.primary};
  }

  img {
    width: 100px;
  }
`;

const TitleContainer = styled.div`
  width: 50%;
  h3 {
    font-family: 'Pacifico', cursive;
    margin-bottom: 10px;
    font-size: ${theme.fonts.size.P2};
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

const DeleteContainer = styled.div`
  transform: translateX(100%);
  width: 70px;
  height: 100%;

  position: absolute;

  right: 0;
  top: 0;

  color: ${theme.colors.white};

  transition: all .4s .2s;
  transform-origin: right;

  &:hover {
    color: ${theme.colors.dark};
  }
`;