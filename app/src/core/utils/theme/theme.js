import { global } from './global';

// Components theme
import { buttonTheme } from './button';

const componentsTheme = {
  buttonTheme,
};

export const theme = {
  ...global,
  ...componentsTheme,
};
