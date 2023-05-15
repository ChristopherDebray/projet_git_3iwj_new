import styled from '@emotion/styled';

export const Container = styled.div`
  ${({ theme }) => `
    padding: 1px 9px;
    background-color: ${theme.colors.green};
    border-radius: 44px;
    width: 110px;
    text-align: center;
  `}
`;

export const CustomLabel = styled.span`
  ${({ theme }) => `
    color: ${theme.colors.darkBlue}
  `}
`;
