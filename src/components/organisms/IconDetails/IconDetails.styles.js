import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.shadesOfGray.zero};
  border-radius: 8px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px 150px 1fr;
  row-gap: 24px;
  padding: 24px;

  svg:first-child {
    grid-row: 2;
  }

  .btn-close {
    cursor: pointer;
    grid-row: 1;
    justify-self: end;

    svg {
      width: 40px;
      height: 40px;
    }
  }

  @media screen and (min-width: 540px) {
    width: 540px;
  }

  @media screen and (min-width: 1025px) {
    width: 930px;
    grid-template-columns: 150px 1fr 48px;
    grid-template-rows: 1fr;
    row-gap: 0;
    column-gap: 40px;
    padding: 40px;

    svg:first-child {
      grid-column: 1;
      grid-row: 1;
    }

    .btn-close {
      grid-column: 3;
      grid-row: 1;

      svg {
        width: 48px;
        height: 48px;
      }
    }
  }

  @media screen and (min-width: 1441px) {
    width: 1000px;
  }
`;

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.shadesOfGray.ten};
  color: ${({ theme }) => theme.colors.primaryBlue.hundred};
  border-radius: 1000px;
  border: 1px solid ${({ theme }) => theme.colors.primaryBlue.twenty};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px 12px;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.shadesOfGray.twentyfive};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primaryBlue.twenty};
  }
`;

export const ContainerWrapper = styled.div`
  grid-row: 3;

  @media screen and (min-width: 1025px) {
    grid-column: 2;
    grid-row: 1;
  }
`;

export const Header = styled.div`
  padding-bottom: 32px;

  h3 {
    margin-top: 16px;
  }

  @media screen and (min-width: 1025px) {
    padding-bottom: 40px;
  }
`;

export const ReactInput = styled.div`
  padding-bottom: 32px;

  button {
    margin-top: 16px;
  }

  @media screen and (min-width: 1025px) {
    padding-bottom: 40px;
  }
`;

export const Buttons = styled.div`
  .btn-download,
  .btn-copy {
    display: flex;
    width: 100%;
    margin: 16px 0;
  }
`;
