import styled from "styled-components"
import { theme } from "../../theme/theme";

type Props = {
  Icon: () => JSX.Element;
  placeholer: string;
  width: number;
}

function Input(props: Props) {
  const { Icon, placeholer, width } = props;

  return (
    <CustomInputWrapper>
      <CustomInputIcon>
        {Icon()}
      </CustomInputIcon>
      <CustomInput $width={width} type='text' placeholder={placeholer}/>
    </CustomInputWrapper>
  )
}

export default Input

const CustomInputWrapper = styled.div`
  position: relative;
`;

const CustomInputIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;

  transform: translateY(-50%);
`;

const CustomInput = styled.input<{ $width: number }>`
  margin: 10px 0;
  border: none;
  border-radius: ${theme.borderRadius.round};

  min-width: ${props => props.$width}px;
  height: 30px;
  padding: 5px 100px 5px 50px;

  background-color: ${theme.colors.greyLight};
  color: ${theme.colors.greyMedium};

  outline: none;
`;
