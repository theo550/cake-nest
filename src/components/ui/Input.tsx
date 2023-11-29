import React, { useContext, useEffect, useRef } from 'react';
import styled from "styled-components"
import { theme } from "../../theme/theme";
import { SelectedMenuContext } from '../../context/menuContext';
import { SelectedMenuContextType } from '../../types/admin';

type Props = {
  Icon: () => JSX.Element;
  placeholer: string;
  width: number;
  value: string | number;
  type: string;
  isFirstInput?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input= (props: Props) => {
  const { Icon, placeholer, width, value, type, isFirstInput, onChange } = props;

  const { selectedMenu } = useContext(SelectedMenuContext) as SelectedMenuContextType;

  const titleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    isFirstInput && titleRef.current?.focus();
  }, [isFirstInput, selectedMenu]);

  return (
    <CustomInputWrapper>
      <CustomInputIcon>
        {Icon()}
      </CustomInputIcon>
      <CustomInput
        onChange={onChange}
        value={value}
        $width={width}
        type={type}
        placeholder={placeholer}
        ref={titleRef}
      />
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
  max-width: ${props => props.$width}px;
  height: 30px;
  padding: 5px 5px 5px 50px;

  background-color: ${theme.colors.greyLight};
  color: ${theme.colors.greyMedium};

  outline: none;
`;
