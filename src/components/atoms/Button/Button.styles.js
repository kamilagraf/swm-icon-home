import styled from 'styled-components';

export const StyledButton = styled.button`
  border-radius: 1000px;
  border: none;
  padding: 8px 16px;
  background-color: ${({ isSecondary, theme }) => (isSecondary ? theme.colors.primaryBlue.twenty : theme.colors.primaryBlue.hundred)};
  cursor: pointer;
  display: flex;
  justify-content: center;
  text-decoration: none;

  &:hover {
    background-color: ${({ isSecondary, theme }) => (isSecondary ? theme.colors.primaryBlue.forty : theme.colors.primaryBlue.eighty)};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primaryBlue.sixty};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.shadesOfGray.forty};
  }

  p {
    margin: 0 8px 0 0;
    color: ${({ isSecondary, theme }) => (isSecondary ? theme.colors.primaryBlue.hundred : theme.colors.shadesOfGray.zero)};
  }

  svg {
    width: 24px;
    height: 24px;
  }

  @media screen and (min-width: 1441px) {
    padding: 12px 24px;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;
