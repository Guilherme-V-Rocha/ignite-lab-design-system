import { Meta, StoryObj } from '@storybook/react';
import { ButtonProps } from '../props/Button';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  args: { children: 'HELLO WORD' },
  argTypes: {},
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};
