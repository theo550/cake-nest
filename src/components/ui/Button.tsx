import styled from 'styled-components';
import { theme } from '../../theme/theme';

type Props = {
  text: string;
  span?: string;
}

const Button = (props: Props) => {
  const { text, span } = props;

  return (
    <StyledButton type='submit'>{text} {span && <span>{span}</span>}</StyledButton>
  )
}

export default Button;

const StyledButton = styled.button`
  height: 50px;
  border-radius: ${theme.borderRadius.round};
  border: none;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: ${theme.fonts.size.P1};
  font-weight: ${theme.fonts.weights.bold};
  cursor: pointer;
  padding: 5px 25px;

  &:hover {
    background-color: ${theme.colors.primary_cake};
  }

  span {
    margin-left: 15px;
  }
`;
