import { useContext } from "react"
import AddImage from "../../components/admin/addProduct/AddImage"
import AddProductForm from "../../components/admin/addProduct/AddProductForm"
import { SelectedMenuContext } from "../../context/menuContext"
import { SelectedMenuContextType } from "../../types/admin"
import styled from "styled-components"
import { theme } from "../../theme/theme"
import { HiCursorClick } from 'react-icons/hi';

function UpdateProduct() {
  const { selectedMenu } = useContext(SelectedMenuContext) as SelectedMenuContextType;
  const { imageSource } = selectedMenu;

  return (
    <UpdateContainer>
      {selectedMenu.id !== 0 &&
        <FormContainer>
          <AddImage image={imageSource}/>
          <AddProductForm image={imageSource}/>
        </FormContainer>
      }

      {selectedMenu.id === 0 &&
        <TextContainer>
          <StyledText>Cliquez sur un produit pour le modifier <span><HiCursorClick/></span></StyledText>
        </TextContainer>
      }
    </UpdateContainer>
  )
}

export default UpdateProduct

const UpdateContainer = styled.div`
  height: 300px;
  display: flex;
`;

const FormContainer = styled.div`
  display: flex;
  padding: 20px 50px;
`;

const StyledText = styled.p`
  color: ${theme.colors.greyMedium};
  font-size: ${theme.fonts.size.P3};
  font-family: 'Pacifico', cursive;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 50px;
`;