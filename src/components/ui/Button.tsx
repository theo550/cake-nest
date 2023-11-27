import styled from 'styled-components';
import { theme } from '../../theme/theme';

type Props = {
  text: string;
  span?: string;
  background?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isSelected?: boolean;
}

const Button = (props: Props) => {
  const { text, span, background, size, isSelected, onClick } = props;

  return (
    <StyledButton
      size={size || 'lg'}
      background={background || theme.colors.primary}
      type='submit'
      onClick={onClick}
      $isSelected={isSelected ? isSelected : false}
    >
      {text} {span && <span>{span}</span>}
    </StyledButton>
  )
}

export default Button;

const StyledButton = styled.button<{ background: string, size: string, $isSelected: boolean }>`
  height: 50px;
  border-radius: ${theme.borderRadius.round};
  border: none;
  background-color: ${props => props.$isSelected ? theme.colors.background_white : props.background};
  color: ${props => props.$isSelected ? theme.colors.primary : theme.colors.white};
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
