import React from 'react';
import PropTypes from 'prop-types';
import { CustomImage } from './styled';

const Image = ({ imgSrc, variantBorder, alt }) => {
  return <CustomImage src={imgSrc} variantBorder={variantBorder} alt={alt} />;
};

Image.propTypes = {
  /**
   * Optional imgSrc
   */
  imgSrc: PropTypes.string,
  /**
   * Optional variantBorder
   */
  variantBorder: PropTypes.string,
  /**
   * Optional alt
   */
  alt: PropTypes.string,
};

Image.defaultProps = {
  imgSrc: 'https://placehold.co/600x400',
  variantBorder: 'rounded',
  alt: null,
};

export default Image;
