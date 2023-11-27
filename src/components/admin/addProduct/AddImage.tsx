import styled from "styled-components";
import { theme } from "../../../theme/theme";

type Props = {
  image: string;
}

function AddImage(props: Props) {
  const {image} = props;
  return (
    <ImageContainer>
      {image &&
        <img src={image} alt="" />
      }
      
      {!image &&
        <p>Aucune Image</p>
      }
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

  img {
    height: 100%;
  }

  p{
    color: ${theme.colors.greyMedium};
  }
`;
