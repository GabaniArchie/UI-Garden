import { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    content: { control: 'text' },
    isDisabled: { control: 'boolean' },
  },
} as Meta;

const Template: StoryObj = {
  render: (args) => <Text content={''} {...args} />,
};

export const Default = {
  ...Template,
  args: {
    content: 'This is some sample text.',
    isDisabled: false,
  },
};

export const Disabled = {
  ...Template,
  args: {
    content: 'This text is disabled.',
    isDisabled: true,
  },
};
