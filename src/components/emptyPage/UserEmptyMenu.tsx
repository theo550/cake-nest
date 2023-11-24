import styled from "styled-components"
import EmptyText from "../ui/EmptyText";

function UserEmptyMenu() {
  return (
    <EmptyUserContainer>
      <EmptyText text="Victime de notre succès"/>
      <EmptyText text="De nouvelles recettes sont en préparation, revenez vite !"/>
    </EmptyUserContainer>
  )
}

export default UserEmptyMenu

const EmptyUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
