import styled from "styled-components";
import { theme } from "../../theme/theme";

type Props = {
  text: string;
}

function EmptyText(props: Props) {
  const { text } = props;

  return (
    <CustomEmptyUserTitle>{text}</CustomEmptyUserTitle>
  )
}

export default EmptyText

const CustomEmptyUserTitle = styled.h1`
  font-family: 'Pacifico', cursive;
  font-size: ${theme.fonts.size.P4};
  color: ${theme.colors.greySemiDark};
  margin: 30px 0;
  text-align: center;
`;