import { Meta, StoryObj } from '@storybook/react';
import RadioButton from './RadioButton';
import { RadioButtonProps } from './RadioButton.types';

export default {
    title: 'Components/RadioButton',
    component: RadioButton,
    argTypes: {
        label: { control: 'text' },
        isDisabled: { control: 'boolean' },
    },
} as Meta<RadioButtonProps>;

const Template: StoryObj<RadioButtonProps> = {
    render: (args) => <RadioButton {...args} />,
};

export const Default = {
    ...Template,
    args: {
        label: 'Radio Button Label',
        isDisabled: false,
    },
};

export const Disabled = {
    ...Template,
    args: {
        label: 'Radio Button Label',
        isDisabled: true,
    },
};
