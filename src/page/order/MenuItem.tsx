import Button from "../../components/ui/Button"
import styled from "styled-components"
import { theme } from "../../theme/theme"
import { fakeMenu2 } from "../../data/fakeMenu"
import { formatPrice, replaceDot } from "../../utils/math"

function MenuItem() {
  return (
    <MenuWrapper>

      {fakeMenu2.map(menu => {
        return (
          <MenuItemContainer>
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