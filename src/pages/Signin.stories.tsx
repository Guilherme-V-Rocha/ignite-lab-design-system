import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { SignIn } from './Signin';

export default {
  title: 'Pages/Sign in',
  component: SignIn,
  args: {},
  argTypes: {},
} as Meta;

export const Default: StoryObj = {
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(
      canvas.getByPlaceholderText('Digite seu e-mail'),
      'guilherme_vr@grupointegrado.br'
    );
    userEvent.type(canvas.getByPlaceholderText('Digite sua senha'), '11234,1');
    userEvent.click(canvas.getByRole('button'));
  },
};
