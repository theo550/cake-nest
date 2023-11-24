import { useContext } from "react"
import Button from "../../components/ui/Button"
import styled from "styled-components"
import { theme } from "../../theme/theme"
import { formatPrice, replaceDot, sortArrayOfObject } from "../../utils/math"
import { TiDelete } from 'react-icons/ti'
import { MenuContextType } from "../../types/menu"
import { menuContext } from "../../context/menuContext"
import { AdminContext } from "../../App"
import { AdminContextType } from "../../types/admin"

function MenuItem() {
  const { menu, setMenu } = useContext(menuContext) as MenuContextType;
  const { isAdmin } = useContext(AdminContext) as AdminContextType;
  
  const handleDeleteItem = (id: number) => {
    setMenu([...menu.filter(menu => menu.id !== id)]);
  }

  return (
    <MenuWrapper>

      {sortArrayOfObject(menu).map(menu => {
        return (
          <MenuItemContainer key={menu.id}>
            {isAdmin &&
              <CustomDeleteButton onClick={() => handleDeleteItem(menu.id)}>
                <TiDelete size='2rem'/>
              </CustomDeleteButton>
            }
            <img src={menu.imageSource || '../../../public/images/cupcake-item.png'} alt="" />
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
    height: 150px;
    margin: 0 auto;
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