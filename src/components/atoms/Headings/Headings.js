import styled from 'styled-components';

export const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.primaryBlue.hundred};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: 28px;
  line-height: 36px;
  margin: 0;

  @media screen and (min-width: 1441px) {
    font-size: 32px;
    line-height: 42px;
  }
`;

export const H2 = styled.h2`
  color: ${({ theme }) => theme.colors.primaryBlue.hundred};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: 24px;
  line-height: 32px;
  margin: 0;

  @media screen and (min-width: 1441px) {
    font-size: 26px;
    line-height: 34px;
  }
`;

export const H3 = styled.h3`
  color: ${({ theme }) => theme.colors.primaryBlue.hundred};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: 20px;
  line-height: 28px;
  margin: 0;

  @media screen and (min-width: 1441px) {
    font-size: 22px;
    line-height: 32px;
  }
`;
