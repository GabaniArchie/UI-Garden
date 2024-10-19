import React from 'react';
import { ImgProps } from './Img.types';
import styled from 'styled-components';

const StyledImg = styled.img<{ width?: string; height?: string; isDisabled?: boolean }>`
  max-width: 100%;
  height: auto;
  filter: ${(props) => (props.isDisabled ? 'grayscale(100%)' : 'none')};
  cursor: ${(props) => (props.isDisabled ? 'not-allowed' : 'pointer')};
`;

const Img: React.FC<ImgProps> = ({ src, alt, width, height, isDisabled }) => {
  return <StyledImg src={src} alt={alt} width={width} height={height} isDisabled={isDisabled} />;
};

export default Img;
