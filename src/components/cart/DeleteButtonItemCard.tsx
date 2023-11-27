import styled from "styled-components"
import { MdDeleteForever } from "react-icons/md";
import { theme } from "../../theme/theme";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { CartContextType } from "../../types/cart";
import { UUID } from "crypto";

type Props = {
  id: number | UUID;
}

function DeleteButtonItemCard(props: Props) {
  const { id } = props;

  const { cart, setCart } = useContext(CartContext) as CartContextType;

  const handleOnDelete = () => {
    setCart([...cart.filter(item => item.id !== id)])
  }

  return (
    <DeleteButtonContainer
      onClick={handleOnDelete}
    >
      <MdDeleteForever size={30}/>
    </DeleteButtonContainer>
  )
}

export default DeleteButtonItemCard

const DeleteButtonContainer = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${theme.colors.red};

  border-radius: 0 ${theme.borderRadius.round} ${theme.borderRadius.round} 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;