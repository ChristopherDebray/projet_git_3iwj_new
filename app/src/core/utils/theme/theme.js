import { global } from './global';

// Components theme
import { buttonTheme } from './button';
import { imageTheme } from './image';

const componentsTheme = {
  buttonTheme,
  imageTheme,
};

export const theme = {
  ...global,
  ...componentsTheme,
};
