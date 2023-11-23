import styled from "styled-components";
import { theme } from "../../../theme/theme";

function AddImage() {
  return (
    <ImageContainer>
      <p>Aucune Image</p>
    </ImageContainer>
  )
}

export default AddImage;

const ImageContainer = styled.div`
  border: 1px solid ${theme.colors.greyLight};

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100px;
  width: 175px;

  cursor: pointer;

  p{
    color: ${theme.colors.greyMedium};
  }
`;
