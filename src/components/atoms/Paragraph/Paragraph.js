import styled from 'styled-components';

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.primaryBlue.hundred};
  font-weight: ${({ isMedium, theme: { fontWeight } }) => (isMedium ? fontWeight.medium : fontWeight.regular)};
  font-size: ${({ isLarge }) => (isLarge ? '18px' : '16px')};
  line-height: ${({ isLarge }) => (isLarge ? '26px' : '24px')};
  margin: 0;

  @media screen and (min-width: 1441px) {
    font-size: ${({ isLarge }) => (isLarge ? '20px' : '18px')};
    line-height: ${({ isLarge }) => (isLarge ? '30px' : '28px')};
  }
`;
