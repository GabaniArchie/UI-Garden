import React from 'react';
import styled from 'styled-components';

interface TextProps {
  content: string;
  isDisabled?: boolean;
}

const StyledText = styled.p<{ isDisabled?: boolean }>`
  color: ${(props) => (props.isDisabled ? '#ccc' : '#000')};
  font-size: 16px;
`;

const Text: React.FC<TextProps> = ({ content, isDisabled = false }) => {
  return <StyledText isDisabled={isDisabled}>{content}</StyledText>;
};

export default Text;
