const getComponentState = ({ isHover, isDisabled }) => {
  if (isDisabled) return 'disabled';

  if (isHover) return 'hover';

  return 'default';
};

export default getComponentState;
