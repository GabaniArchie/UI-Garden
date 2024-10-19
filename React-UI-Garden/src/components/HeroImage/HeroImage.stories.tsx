import { Meta, StoryObj } from '@storybook/react';
import HeroImage from './HeroImage';
import { HeroImageProps } from './HeroImage.types';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    imageUrl: { control: 'text' },
    isDisabled: { control: 'boolean' },
  },
} as Meta<HeroImageProps>;

const Template: StoryObj<HeroImageProps> = {
  render: (args) => <HeroImage {...args} />,
};

export const Default = {
  ...Template,
  args: {
    imageUrl: 'https://picsum.photos/seed/picsum/800/500', // Placeholder image
    isDisabled: false,
  },
};

export const Disabled = {
  ...Template,
  args: {
    imageUrl: 'https://picsum.photos/seed/picsum/800/500', // Placeholder image
    isDisabled: true,
  },
};