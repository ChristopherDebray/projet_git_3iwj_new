import styled from '@emotion/styled';

export const ButtonContainer = styled.button`
  ${({ theme, variantType, variantColor, state }) => {
    console.log(theme)
    console.log(theme.buttonTheme[variantType][variantColor][state].borderColor)
    return `
    all: unset;
    padding: 7px 24px;
    font-weight: 700;
    font-size: 13px;
    border-radius: 7px;
    border: 2px solid;
    border-color: ${theme.buttonTheme[variantType][variantColor][state].borderColor};
    background-color: ${theme.buttonTheme[variantType][variantColor][state].backgroundColor};
  `}}
`;

export const CustomLabel = styled.span`
  ${({ theme, variantType, variantColor, state }) =>
    `color: ${theme.buttonTheme[variantType][variantColor][state].color};`
  }
`;
