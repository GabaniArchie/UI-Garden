import React from 'react';
import { LabelProps } from './Label.types';
import styled from 'styled-components';

const StyledLabel = styled.label<{ isDisabled?: boolean }>`
  display: block;
  margin-bottom: 8px;
  color: ${(props) => (props.isDisabled ? '#ccc' : '#000')};
  cursor: ${(props) => (props.isDisabled ? 'not-allowed' : 'pointer')};
`;

const Label: React.FC<LabelProps> = ({ text, isDisabled }) => {
  return <StyledLabel isDisabled={isDisabled}>{text}</StyledLabel>;
};

export default Label;
