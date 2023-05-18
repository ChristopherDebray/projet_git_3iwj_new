import styled from '@emotion/styled';

export const Title = styled.h1`
  ${({ theme }) => `
    color: ${theme.colors.mediumGrey};
    font-size: ${theme.fontSize[10]};
    font-weight: ${theme.fontWeight.semiBold};
    `}
`;

export const Text = styled.p`
  ${({ theme }) => `
    color: ${theme.colors.darkBlue};
    font-size: ${theme.fontSize[13]};
    font-weight: ${theme.fontWeight.normal};
    `}
`;

export const ItalicText = styled.p`
  ${({ theme }) => `
    color: ${theme.colors.darkBlue};
    font-size: ${theme.fontSize[12]};
    font-weight: ${theme.fontWeight.normal};
    font-style: italic;
    `}
`;
