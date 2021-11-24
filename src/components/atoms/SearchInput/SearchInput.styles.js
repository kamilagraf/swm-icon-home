import styled from 'styled-components';

export const Wrapper = styled.div.attrs({ className: 'search-input ' })`
  display: flex;
  align-items: center;
  border-radius: 1000px;
  background-color: ${({ theme }) => theme.colors.shadesOfGray.zero};
  border: 1px solid #c1c6e5;
  padding: 8px 12px;
  height: 40px;

  svg,
  .btn-delete {
    width: 24px;
    height: 24px;
  }

  svg {
    margin-right: 8px;
  }

  .btn-delete {
    margin-left: 8px;
    cursor: pointer;
  }

  @media screen and (min-width: 1025px) {
    width: 360px;
  }

  @media screen and (min-width: 1441px) {
    padding: 12px 16px;
    height: 52px;
    width: 500px;

    svg,
    .btn-delete {
      width: 28px;
      height: 28px;
    }
  }
`;

export const StyledSearchInput = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  background-color: ${({ theme }) => theme.colors.shadesOfGray.zero};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.primaryBlue.hundred};
  box-sizing: border-box;
  font-size: 16px;
  line-height: 24px;

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.primaryBlue.forty};
  }

  @media screen and (min-width: 1441px) {
    font-size: 18px;
    line-height: 28px;
  }
`;
