import { Meta, StoryObj } from '@storybook/react';
import Label from './Label';
import { LabelProps } from './Label.types';

export default {
    title: 'Components/Label',
    component: Label,
    argTypes: {
        text: { control: 'text' },
        isDisabled: { control: 'boolean' },
    },
} as Meta<LabelProps>;

const Template: StoryObj<LabelProps> = {
    render: (args) => <Label {...args} />,
};

export const Default = {
    ...Template,
    args: {
        text: 'Label Text',
        isDisabled: false,
    },
};

export const Disabled = {
    ...Template,
    args: {
        text: 'Label Text',
        isDisabled: true,
    },
};
