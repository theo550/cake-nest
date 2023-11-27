import styled from "styled-components"
import { MdDeleteForever } from "react-icons/md";
import { theme } from "../../theme/theme";
import { useContext } from "react";
import { CartContextType } from "../../types/cart";
import { CartContext } from "../../context/cartContext";

type Props = {
  id: number;
}

function DeleteButtonItemCard(props: Props) {
  const { id } = props;
  const { cart, setCart } = useContext(CartContext) as CartContextType;

  const handleOnDelete = () => {
    setCart(cart.filter(item => item.id !== id))
  }
  return (
    <DeleteButtonContainer
      onClick={handleOnDelete}
    >
      <MdDeleteForever/>
    </DeleteButtonContainer>
  )
}

export default DeleteButtonItemCard

const DeleteButtonContainer = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${theme.colors.red};

  display: flex;
  align-items: center;
  justify-content: center;
`;