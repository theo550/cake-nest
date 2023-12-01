import { useContext } from "react"
import Button from "../../components/ui/Button"
import styled from "styled-components"
import { theme } from "../../theme/theme"
import { formatPrice, replaceDot } from "../../utils/math"
import { TiDelete } from 'react-icons/ti'
import { MenuContextType, MenuType } from "../../types/menu"
import { SelectedMenuContext, menuContext } from "../../context/menuContext"
import { AdminContext } from "../../App"
import { AdminContextType, SelectedMenuContextType, SelectedTabContextType, isOpenContextType } from "../../types/admin"
import { isOpenContext } from "../../context/isOpenContext"
import { AdminTabContext } from "../../components/admin/AdminPanel"
import { CartContext } from "../../context/cartContext"
import { CartContextType } from "../../types/cart"
import { UUID } from "crypto"
import { HighlightedContext } from "../../context/highlight"
import { highlightContextType } from "../../types/highlight"

function MenuItem() {
  const { menu, setMenu } = useContext(menuContext) as MenuContextType;
  const { isAdmin } = useContext(AdminContext) as AdminContextType;
  const { setIsOpen } = useContext(isOpenContext) as isOpenContextType;
  const { setSelectedTab } = useContext(AdminTabContext) as SelectedTabContextType;
  const { selectedMenu, setSelectedMenu } = useContext(SelectedMenuContext) as SelectedMenuContextType;
  const { cart, setCart } = useContext(CartContext) as CartContextType;
  const { highlighted, discount } = useContext(HighlightedContext) as highlightContextType;
  
  const handleDeleteItem = (e: React.MouseEvent<HTMLDivElement, MouseEvent> ,id: number | UUID) => {
    e.stopPropagation();
    setMenu([...menu.filter(menu => menu.id !== id)]);
  }

  const handleSelectItem = (item: MenuType) => {
    if (isAdmin) {
      setIsOpen(true);
      setSelectedTab(1);
      setSelectedMenu(item);
    }
  }

  const addItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, item: MenuType) => {
    if (item.isAvailable) {
      e.stopPropagation();
      if (cart.filter(menu => menu.id === item.id).length === 0) {
        setCart([...cart, { id: item.id, quantity: 1}]);
      } else {
        const newCart = [...cart];
        newCart.map(menu => {
          if (menu.id === item.id) {
            menu.quantity += 1
          }
        })
        setCart(newCart);
      }
    }
  }

  const applyDiscount = (price: number, discount: number) => {
    return replaceDot(formatPrice(price - (price * (discount / 100))));
  }

  return (
    <MenuWrapper>

      {menu.filter(item => highlighted.includes(Number(item.id))).map(menu => {
        return (
          <MenuItemContainer $isavalaible={menu.isAvailable} $isselected={selectedMenu.id === menu.id} $isadmin={isAdmin} $isAdvertised={highlighted.includes(Number(menu.id))} key={menu.id} onClick={() => handleSelectItem(menu)}>
            
            {isAdmin &&
              <CustomDeleteButton $isselected={selectedMenu.id === menu.id} onClick={(e) => handleDeleteItem(e, menu.id)}>
                <TiDelete size='2rem'/>
              </CustomDeleteButton>
            }
            
            {!menu.isAvailable &&
              <p className="rupture">Épuisé</p>
            }
            
            <img src={menu.imageSource || '../../../public/images/cupcake-item.png'} alt="" />
            <h3>{menu.title}</h3>
            <div>
              <p>{applyDiscount(menu.price, discount.find(d => d.id === menu.id)?.amount || 0)}€</p>
              <Button onClick={(e) => addItem(e, menu)} text="Ajouter" isSelected={selectedMenu.id === menu.id} disabled={!menu.isAvailable}/>
            </div>
            
            {highlighted.includes(Number(menu.id)) &&
              <p className="ads">sponsorisé</p>
            }

          </MenuItemContainer>
        )
      })}

      {menu.filter(item => !highlighted.includes(Number(item.id))).map(menu => {
        return (
          <MenuItemContainer $isavalaible={menu.isAvailable} $isselected={selectedMenu.id === menu.id} $isadmin={isAdmin} $isAdvertised={highlighted.includes(Number(menu.id))} key={menu.id} onClick={() => handleSelectItem(menu)}>
            
            {isAdmin &&
              <CustomDeleteButton $isselected={selectedMenu.id === menu.id} onClick={(e) => handleDeleteItem(e, menu.id)}>
                <TiDelete size='2rem'/>
              </CustomDeleteButton>
            }
            
            {!menu.isAvailable &&
              <p className="rupture">Épuisé</p>
            }
            
            <img src={menu.imageSource || '../../../public/images/cupcake-item.png'} alt="" />
            <h3>{menu.title}</h3>
            <div>
              <p>{applyDiscount(menu.price, discount.find(d => d.id === menu.id)?.amount || 0)}€</p>
              <Button onClick={(e) => addItem(e, menu)} text="Ajouter" isSelected={selectedMenu.id === menu.id} disabled={!menu.isAvailable}/>
            </div>
            
            {highlighted.includes(Number(menu.id)) &&
              <p className="ads">sponsorisé</p>
            }

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

const MenuItemContainer = styled.div<{ $isadmin: boolean, $isselected: boolean, $isavalaible: boolean, $isAdvertised: boolean }>`
  opacity: ${props => !props.$isavalaible && .5};

  width: 200px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};
  border: ${props => props.$isAdvertised ? '3px solid red' : 'none'};
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
    white-space: nowrap;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      color: ${props => props.$isselected ? `${theme.colors.background_white}` : `${theme.colors.primary}`};
    }
  }

  .rupture {
    color: ${theme.colors.red};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-30deg);
    font-size: ${theme.fonts.size.P5};
    -webkit-text-stroke: 1px ${theme.colors.dark};
  }

  .ads {
    color: ${props => props.$isselected ? theme.colors.white : theme.colors.greyMedium};
    text-align: right;
    padding: 10px 10px 0 0 ;
  }

`;

const CustomDeleteButton = styled.div<{ $isselected: boolean }>`
  color: ${props => props.$isselected ? theme.colors.white : theme.colors.primary};
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;