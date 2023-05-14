import { theme } from '../src/core/utils/theme/theme'
import { ThemeProvider } from '@emotion/react';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#FFF',
        },
        {
          name: 'brownGrey',
          value: '#676478',
        },
        {
          name: 'dark',
          value: '#000',
        },
        {
          name: 'darkBlue',
          value: '#120D2E',
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
