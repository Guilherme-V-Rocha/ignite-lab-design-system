import { Meta, StoryObj } from '@storybook/react';
import { CheckboxProps } from '../../props/CheckboxProps';
import { Checkbox } from './Checkbox';
import { Text } from '../Text/Text';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text size="sm">Lembrar-me de min por 30 dias</Text>
        </div>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};
