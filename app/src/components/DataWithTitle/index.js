import React from 'react';
import PropTypes from 'prop-types';
import { Title, Text, ItalicText } from './styled';

const DataWithTitle = ({ title, text, italicText }) => (
  <section>
    <Title>{title}</Title>
    <Text>{text}</Text>
    {ItalicText && (
    <ItalicText>{italicText}</ItalicText>
    )}
  </section>
);

DataWithTitle.propTypes = {
  /**
   * Required title
   */
  title: PropTypes.string.isRequired,
  /**
   * Required text
   */
  text: PropTypes.string.isRequired,
  /**
   * Optional italicText
   */
  italicText: PropTypes.string,
};

DataWithTitle.defaultProps = {
  italicText: null,
};

export default DataWithTitle;
