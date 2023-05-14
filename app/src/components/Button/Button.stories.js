import React from 'react';

import ButtonComponent from '.';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variantColor: {
      options: ['primary', 'secondary', 'tertiary', 'white'],
      control: 'radio',
      description: 'Variant Color',
    },
    variantType: {
      options: ['fill', 'stroke'],
      control: 'radio',
      description: 'Variant Type',
    },
    onClick: {
      description: 'Optional click handler (() => void)',
      argTypes: { onClick: { action: 'Button is clicked' } },
    },
    isDisabled: {
      description: 'Disable onClick handler and change style',
    },
  },
  args: {
    isDisabled: false,
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '3em' }}>
        <Story />
      </div>
    ),
  ],
};

export const Button = {
  args: {
    label: 'Bouton',
    variantType: 'fill',
    variantColor: 'primary',
  },
  parameters: {
    backgrounds: { default: 'brownGrey' },
  },
};
