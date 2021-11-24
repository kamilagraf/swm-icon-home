import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  p:first-child {
    margin: 8px auto auto 30px;
  }

  @media screen and (min-width: 1025px) {
    p:first-child {
      margin: 32px auto auto 40px;
    }
  }
`;

export const IconsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  grid-wrap: wrap;
  margin: 32px 30px auto 30px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export const Center = styled.div`
  min-width: 300px;
  max-width: 500px;
  text-align: center;
`;
