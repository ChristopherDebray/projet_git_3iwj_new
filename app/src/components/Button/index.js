import React, { useState } from 'react';
import PropTypes from 'prop-types';
import getComponentState from './methods/getComponentState';
import noop from '../../core/methods/noop';
import { ButtonContainer, CustomLabel } from './styled';

const Button = ({
  label, variantType, variantColor, isDisabled, onClick,
}) => {
  const [isHover, setIsHover] = useState(false);
  const state = getComponentState({ isHover, isDisabled });

  return (
    <ButtonContainer
      variantType={variantType}
      variantColor={variantColor}
      state={state}
      type="button"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={onClick}
      disabled={isDisabled}
    >
      <CustomLabel
        variantType={variantType}
        variantColor={variantColor}
        state={state}
      >
        {label}
      </CustomLabel>
    </ButtonContainer>
  );
};

Button.propTypes = {
  /**
   * Required label
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional variantType
   */
  variantType: PropTypes.oneOf(['fill', 'stroke']),
  /**
   * Otional variantColor
   */
  variantColor: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'white']),
  /**
   * Optional isDisabled
   */
  isDisabled: PropTypes.bool,
  /**
   * Optional onClick
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variantType: 'fill',
  variantColor: 'primary',
  isDisabled: false,
  onClick: noop,
};

export default Button;
