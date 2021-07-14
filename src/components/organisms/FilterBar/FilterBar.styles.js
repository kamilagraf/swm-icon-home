import styled from 'styled-components';

// display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
export const Wrapper = styled.div`
  position: absolute;
  width: 320px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.shadesOfGray.zero};
  overflow-y: scroll;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};

  @media screen and (min-width: 540px) {
    min-width: 340px;
  }

  @media screen and (min-width: 1025px) {
    position: sticky;
    top: 84px;
    display: block;
  }

  @media screen and (min-width: 1441px) {
    min-width: 400px;
    top: 104px;
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
