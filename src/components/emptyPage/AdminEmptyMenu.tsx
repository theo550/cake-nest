import styled from "styled-components";
import EmptyText from "../ui/EmptyText";
import Button from "../ui/Button";
import { useContext } from "react";
import { menuContext } from "../../context/menuContext";
import { MenuContextType } from "../../types/menu";
import { fakeMenu2 } from "../../data/fakeMenu";
import { CartContext } from "../../context/cartContext";
import { CartContextType } from "../../types/cart";

function AdminEmptyMenu() {
  const { setMenu } = useContext(menuContext) as MenuContextType;
  const { setCart } = useContext(CartContext) as CartContextType;

  const handleClick = () => {
    setMenu(fakeMenu2);
    setCart([]);
  }

  return (
    <EmptyAdminContainer>
      <EmptyText text="Le menu est vide ?"/>
      <EmptyText text="Cliquez ci-dessous pour le réinitialiser"/>
      <Button
        text="Générer de nouveaux gateaux"
        size="sm"
        onClick={handleClick}
      />
    </EmptyAdminContainer>
  )
}

export default AdminEmptyMenu

const EmptyAdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;