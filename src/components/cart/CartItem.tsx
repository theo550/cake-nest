import styled from "styled-components";
import { MenuContextType } from "../../types/menu"
import { theme } from "../../theme/theme";
import { formatPrice, replaceDot } from "../../utils/math";
import DeleteButtonItemCard from "./DeleteButtonItemCard";
import './cart-item.css'
import { CartContextType, CartType } from "../../types/cart";
import { useContext } from "react";
import { menuContext } from "../../context/menuContext";
import { CartContext } from "../../context/cartContext";

type Props = {
  item: CartType;
}
function CartItem(props: Props) {
  const { item } = props;

  const { menu } = useContext(menuContext) as MenuContextType;
  const { cart } = useContext(CartContext) as CartContextType;

  const cartItem = menu.find(menu => menu.id === item.id);
  const cartQuantity = cart.find(cart => cart.id === item.id)?.quantity

  return cartItem && cartQuantity && (
    <CartItemContainer className="cart-item__container">
        <img src={cartItem.imageSource} alt="" />
        <TitleContainer>
          <h3>{cartItem.title}</h3>
          <p>{replaceDot(formatPrice(cartItem.price * cartQuantity))}</p>
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

const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${theme.colors.white};

  margin: 10px 0;
  padding: 10px;

  width: 85%;
  border-radius: ${theme.borderRadius.round};

  box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.1);
  -webkit-box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.1);
  -moz-box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.1);

  position: relative;

  cursor: pointer;
  transition: all .2s;

  &:hover {
    transform: scale(1.03);
  }

  p {
    color: ${theme.colors.primary};
  }

  img {
    width: 100px;
  }
`;

const TitleContainer = styled.div`
  flex-grow: 1;

  h3 {
    font-family: 'Pacifico', cursive;
    margin-bottom: 10px;
    font-size: ${theme.fonts.size.P2};
  }
`;

const DeleteContainer = styled.div`
  transform: scaleX(0);
  width: 70px;
  height: 100%;

  position: absolute;

  right: 0;
  top: 0;

  color: ${theme.colors.white};

  &:hover {
    color: ${theme.colors.dark};
  }
`;