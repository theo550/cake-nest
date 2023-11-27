import styled from "styled-components";
import { MenuType } from "../../types/menu"
import { theme } from "../../theme/theme";
import { formatPrice, replaceDot } from "../../utils/math";
import DeleteButtonItemCard from "./DeleteButtonItemCard";
import './cart-item.css'

type Props = {
  item: MenuType;
}
function CartItem(props: Props) {
  const { item } = props;

  return (
    <CartItemContainer className="cart-item__container">
      <img src={item.imageSource} alt="" />
      <TitleContainer>
        <h3>{item.title}</h3>
        <p>{replaceDot(formatPrice(item.price * item.quantity))}</p>
      </TitleContainer>
      <p>x{item.quantity}</p>
      <DeleteContainer className="cart-item__container--delete">
        <DeleteButtonItemCard
          id={item.id}
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