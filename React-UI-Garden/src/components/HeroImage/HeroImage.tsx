import React from 'react';
import { HeroImageProps } from './HeroImage.types';
import styled from 'styled-components';

const StyledHeroImage = styled.div<{ imageUrl: string; isDisabled?: boolean }>`
  width: 100%;
  height: 300px; /* Adjust the height as needed */
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  filter: ${(props) => (props.isDisabled ? 'grayscale(100%)' : 'none')};
  cursor: ${(props) => (props.isDisabled ? 'not-allowed' : 'pointer')};
`;

const HeroImage: React.FC<HeroImageProps> = ({ imageUrl, isDisabled }) => {
  return <StyledHeroImage imageUrl={imageUrl} isDisabled={isDisabled} />;
};

export default HeroImage;