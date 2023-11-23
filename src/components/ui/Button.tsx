import styled from 'styled-components';
import { theme } from '../../theme/theme';

type Props = {
  text: string;
  span?: string;
  background?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const Button = (props: Props) => {
  const { text, span, background, size, onClick } = props;

  return (
    <StyledButton
      size={size || 'lg'}
      background={background || theme.colors.primary_cake}
      type='submit'
      onClick={onClick}
    >
      {text} {span && <span>{span}</span>}
    </StyledButton>
  )
}

export default Button;

const StyledButton = styled.button<{ background: string, size: string }>`
  height: 50px;
  border-radius: ${theme.borderRadius.round};
  border: none;
  background-color: ${props => props.background};
  color: ${theme.colors.white};
  font-size: ${props => props.size === 'sm' ? theme.fonts.size.XS : theme.fonts.size.P1};
  font-weight: ${theme.fonts.weights.bold};
  cursor: pointer;
  padding: 5px 25px;
  width: ${props => props.size === 'sm' ? '250px' : ''};

  &:hover {
    background-color: ${theme.colors.white};
    color: ${props => props.background};
    border: 3px solid ${props => props.background};
  }

  span {
    margin-left: 15px;
  }
`;
