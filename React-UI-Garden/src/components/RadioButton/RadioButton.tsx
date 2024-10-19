import React from 'react';
import { RadioButtonProps } from './RadioButton.types';
import styled from 'styled-components';

const StyledLabel = styled.label<{ isDisabled?: boolean }>`
  display: flex;
  align-items: center;
  cursor: ${(props) => (props.isDisabled ? 'not-allowed' : 'pointer')};
  color: ${(props) => (props.isDisabled ? '#ccc' : '#000')};
`;

const RadioInput = styled.input`
  margin-right: 8px;
`;

const RadioButton: React.FC<RadioButtonProps> = ({ label, value, isDisabled, name }) => {
  return (
    <StyledLabel isDisabled={isDisabled}>
      <RadioInput type="radio" value={value} name={name} disabled={isDisabled} />
      {label}
    </StyledLabel>
  );
};

export default RadioButton;
