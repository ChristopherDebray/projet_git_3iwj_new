import DataWithTitle from '.';

export default {
  title: 'components/DataWithTitle',
  component: DataWithTitle,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    title: 'TYPE',
    text: 'Composition',
  },
};

export const WithItalicText = {
  args: {
    title: 'TYPE',
    text: 'Famille du produit',
    italicText: 'Variabilité du produit',
  },
};
