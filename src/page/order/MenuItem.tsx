import { useContext } from "react"
import Button from "../../components/ui/Button"
import styled from "styled-components"
import { theme } from "../../theme/theme"
import { formatPrice, replaceDot } from "../../utils/math"
import { TiDelete } from 'react-icons/ti'
import { MenuContextType } from "../../types/menu"
import { menuContext } from "../../context/menuContext"

function MenuItem() {
  const { menu, setMenu } = useContext(menuContext) as MenuContextType;
  
  const handleDeleteItem = (id: number) => {
    setMenu([...menu.filter(menu => menu.id !== id)]);
  }

  return (
    <MenuWrapper>

      {menu.map(menu => {
        return (
          <MenuItemContainer key={menu.id}>
            <CustomDeleteButton onClick={() => handleDeleteItem(menu.id)}>
              <TiDelete size='2rem'/>
            </CustomDeleteButton>
            <img src={menu.imageSource} alt="" />
            <h3>{menu.title}</h3>
            <div>
              <p>{replaceDot(formatPrice(menu.price))}€</p>
              <Button text="Ajouter"/>
            </div>
          </MenuItemContainer>
        )
      })}
      
    </MenuWrapper>
  )
}

export default MenuItem

const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 60px;
`;

const MenuItemContainer = styled.div`

  width: fit-content;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};
  padding: 30px 15px;
  position: relative;

  img {
    width: 200px;
  }

  h3 {
    font-family: 'Pacifico', cursive;
    font-size: ${theme.fonts.size.P3};
    margin: 30px 0;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      color: ${theme.colors.primary};
    }
  }

`;

const CustomDeleteButton = styled.div`
  color: ${theme.colors.primary};
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;