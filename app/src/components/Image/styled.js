import styled from '@emotion/styled';

export const CustomImage = styled.img`
  ${({ theme, variantBorder }) => `
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: ${theme.imageTheme.variantBorder[variantBorder].borderRadius}
`}
`;
