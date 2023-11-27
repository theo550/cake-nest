import { useContext } from "react"
import Button from "../../components/ui/Button"
import styled from "styled-components"
import { theme } from "../../theme/theme"
import { formatPrice, replaceDot, sortArrayOfObject } from "../../utils/math"
import { TiDelete } from 'react-icons/ti'
import { MenuContextType, MenuType } from "../../types/menu"
import { SelectedMenuContext, menuContext } from "../../context/menuContext"
import { AdminContext } from "../../App"
import { AdminContextType, SelectedMenuContextType, SelectedTabContextType, isOpenContextType } from "../../types/admin"
import { isOpenContext } from "../../context/isOpenContext"
import { AdminTabContext } from "../../components/admin/AdminPanel"
import { CartContext } from "../../context/cartContext"
import { CartContextType } from "../../types/cart"

function MenuItem() {
  const { menu, setMenu } = useContext(menuContext) as MenuContextType;
  const { isAdmin } = useContext(AdminContext) as AdminContextType;
  const { setIsOpen } = useContext(isOpenContext) as isOpenContextType;
  const { setSelectedTab } = useContext(AdminTabContext) as SelectedTabContextType;
  const { selectedMenu, setSelectedMenu } = useContext(SelectedMenuContext) as SelectedMenuContextType;
  const { cart, setCart } = useContext(CartContext) as CartContextType;
  
  const handleDeleteItem = (id: number) => {
    setMenu([...menu.filter(menu => menu.id !== id)]);
  }

  const handleSelectItem = (item: MenuType) => {
    if (isAdmin) {
      setIsOpen(true);
      setSelectedTab(1);
      setSelectedMenu(item);
    }
  }

  const addItem = (menu: MenuType) => {
    setCart([...cart, menu])
  }

  return (
    <MenuWrapper>

      {sortArrayOfObject(menu).map(menu => {
        return (
          <MenuItemContainer $isselected={selectedMenu.id === menu.id} $isadmin={isAdmin} key={menu.id} onClick={() => handleSelectItem(menu)}>
            {isAdmin &&
              <CustomDeleteButton onClick={() => handleDeleteItem(menu.id)}>
                <TiDelete size='2rem'/>
              </CustomDeleteButton>
            }
            <img src={menu.imageSource || '../../../public/images/cupcake-item.png'} alt="" />
            <h3>{menu.title}</h3>
            <div>
              <p>{replaceDot(formatPrice(menu.price))}€</p>
              <Button onClick={() => addItem(menu)} text="Ajouter" isSelected={selectedMenu.id === menu.id}/>
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

const MenuItemContainer = styled.div<{ $isadmin: boolean, $isselected: boolean }>`

  width: 200px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};
  padding: 30px 15px;
  position: relative;

  background-color: ${props => props.$isselected ? `${theme.colors.primary}` : `${theme.colors.background_white}`};

  transition: all .2s;
  cursor: pointer;

  &:hover {
    transform: ${props => props.$isadmin && 'scale(1.1)'};
  }

  img {
    width: 200px;
    height: 150px;
    margin: 0 auto;
  }

  h3 {
    font-family: 'Pacifico', cursive;
    font-size: ${theme.fonts.size.P3};
    margin: 30px 0;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      color: ${props => props.$isselected ? `${theme.colors.background_white}` : `${theme.colors.primary}`};
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