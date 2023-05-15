import React from 'react';
import PropTypes from 'prop-types';
import { Container, CustomLabel } from './styled';

const StockTag = ({ stockValue, stockUnit }) => (
  <Container>
    <CustomLabel
      variant="labelSmall"
      htmlTag="p"
    />
    {`${stockValue}${stockUnit} disponibles`}
  </Container>
);

StockTag.propTypes = {
  /**
   * Optional stock
   */
  stockValue: PropTypes.number,
  /**
   * Required unit
   */
  stockUnit: PropTypes.string,
};

StockTag.defaultProps = {
  stockValue: 'errorValue ',
  stockUnit: ' errorUnit ',
};

export default StockTag;
