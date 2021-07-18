import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 320px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.shadesOfGray.zero};
  overflow-y: scroll;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};

  @media screen and (min-width: 540px) {
    min-width: 340px;
  }

  @media screen and (min-width: 1025px) {
    display: block;
    position: sticky;
    height: calc(100vh - 80px);
    top: 80px;
  }

  @media screen and (min-width: 1441px) {
    min-width: 400px;
    height: calc(100vh - 100px);
    top: 100px;
  }
`;

export const FiltersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 8px;
  column-gap: 16px;
  align-items: center;
  margin: 20px 30px 40px 30px;

  h2 {
    padding: 16px 0;
  }

  h2,
  .filter-entry {
    grid-column: 1 / span 4;
  }

  @media screen and (min-width: 1441px) {
    margin: 20px 40px 52px 40px;

    h2 {
      padding: 24px 0;
    }
  }
`;

export const Title = styled.div`
  display: grid;
  align-items: center;
  grid-column: 1 / 5;

  h1 {
    grid-column: 1 / span 3;
    padding: 16px 0;
  }
  svg {
    grid-column: 4;
    justify-self: end;
    cursor: pointer;
  }

  @media screen and (min-width: 1025px) {
    display: none;
  }
`;
