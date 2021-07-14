import styled from 'styled-components';

export const Wrapper = styled.div.attrs({ className: 'filter-entry' })`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 38px;
  padding: 6px 12px;
  border-radius: 1000px;
  background-color: ${({ isEnabled, theme }) => (isEnabled ? '#EDEEF7' : theme.colors.shadesOfGray.zero)};
  cursor: pointer;

  &:focus {
    background-color: pink;
  }

  svg {
    width: 26px;
    height: 26px;
  }

  @media screen and (min-width: 1441px) {
    height: 46px;
    padding: 8px 16px;

    svg {
      width: 30px;
      height: 30px;
    }
  }
`;
