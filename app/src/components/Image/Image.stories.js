import Image from '.';

export default {
  title: 'components/Image',
  component: Image,
  argTypes: {
    variantBorder: {
      options: ['rounded', 'topRounded'],
      control: 'radio',
      description: 'Variant Border',
    },
  },
};

export const Default = {};
