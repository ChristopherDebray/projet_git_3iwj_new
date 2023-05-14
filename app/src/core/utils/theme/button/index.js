import { global } from '../global';

export const buttonTheme = {
  fill: {
    primary: {
      default: {
        color: global.colors.darkBlue,
        borderColor: global.colors.green,
        backgroundColor: global.colors.green,
      },
      hover: {
        color: global.colors.darkBlue,
        borderColor: global.colors.hover.green,
        backgroundColor: global.colors.hover.green,
      },
      disabled: {
        color: global.colors.disabledGrey,
        borderColor: global.colors.grey,
        backgroundColor: global.colors.grey,
      },
    },
    secondary: {
      default: {
        color: global.colors.darkBlue,
        borderColor: global.colors.lightGreen,
        backgroundColor: global.colors.lightGreen,
      },
      hover: {
        color: global.colors.darkBlue,
        borderColor: global.colors.hover.lightGreen,
        backgroundColor: global.colors.hover.lightGreen,
      },
      disabled: {
        color: global.colors.disabledGrey,
        borderColor: global.colors.grey,
        backgroundColor: global.colors.grey,
      },
    },
    tertiary: {
      default: {
        color: global.colors.white,
        borderColor: global.colors.darkBlue,
        backgroundColor: global.colors.darkBlue,
      },
      hover: {
        color: global.colors.white,
        borderColor: global.colors.hover.green,
        backgroundColor: global.colors.hover.green,
      },
      disabled: {
        color: global.colors.disabledGrey,
        borderColor: global.colors.grey,
        backgroundColor: global.colors.grey,
      },
    },
    white: {
      default: {
        color: global.colors.white,
        borderColor: global.colors.white20,
        backgroundColor: global.colors.white20,
      },
      hover: {
        color: global.colors.white,
        borderColor: global.colors.lightGreen20,
        backgroundColor: global.colors.lightGreen20,
      },
      disabled: {
        color: global.colors.white,
        borderColor: global.colors.disabledGrey,
        backgroundColor: global.colors.disabledGrey,
      },
    },
  },
  stroke: {
    primary: {
      default: {
        color: global.colors.darkBlue,
        borderColor: global.colors.green,
        backgroundColor: 'unset',
      },
      hover: {
        color: global.colors.hover.darkBlue,
        borderColor: global.colors.hover.green,
        backgroundColor: 'unset',
      },
      disabled: {
        color: global.colors.disabledGrey,
        borderColor: global.colors.grey,
        backgroundColor: 'unset',
      },
    },
    secondary: {
      default: {
        color: global.colors.darkBlue,
        borderColor: global.colors.lightGreen,
        backgroundColor: 'unset',
      },
      hover: {
        color: global.colors.hover.darkBlue,
        borderColor: global.colors.hover.lightGreen,
        backgroundColor: 'unset',
      },
      disabled: {
        color: global.colors.grey,
        borderColor: global.colors.grey,
        backgroundColor: 'unset',
      },
    },
    tertiary: {
      default: {
        color: global.colors.darkBlue,
        borderColor: global.colors.darkBlue,
        backgroundColor: 'unset',
      },
      hover: {
        color: global.colors.hover.green,
        borderColor: global.colors.hover.green,
        backgroundColor: 'unset',
      },
      disabled: {
        color: global.colors.grey,
        borderColor: global.colors.grey,
        backgroundColor: 'unset',
      },
    },
    white: {
      default: {
        color: global.colors.white20,
        borderColor: global.colors.white20,
        backgroundColor: 'unset',
      },
      hover: {
        color: global.colors.lightGreen20,
        borderColor: global.colors.lightGreen20,
        backgroundColor: 'unset',
      },
      disabled: {
        color: global.colors.disabledGrey,
        borderColor: global.colors.disabledGrey,
        backgroundColor: 'unset',
      },
    },
  },
};
