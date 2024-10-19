import React from 'react';
import { ButtonProps } from './Button.types';
import styled from 'styled-components';

const StyledButton = styled.button<{ isDisabled?: boolean }>`
  padding: 10px 20px;
  background-color: ${(props) => (props.isDisabled ? '#ccc' : '#007bff')};
  color: ${(props) => (props.isDisabled ? '#666' : '#fff')};
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.isDisabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.isDisabled ? '#ccc' : '#0056b3')};
  }
`;

const Button: React.FC<ButtonProps> = ({ label, isDisabled, onClick }) => {
  return (
    <StyledButton isDisabled={isDisabled} onClick={isDisabled ? undefined : onClick}>
      {label}
    </StyledButton>
  );
};

export default Button;
