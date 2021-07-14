import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #f5f7ff;
  display: flex;
  width: 100%;
  padding: 24px 30px;
  position: sticky;
  top: 84px;
  z-index: 1;

  .search-input {
    margin-right: 16px;
    width: 100%;
  }

  @media screen and (min-width: 540px) {
    .search-input {
      margin-right: 32px;
    }
  }

  @media screen and (min-width: 1025px) {
    display: none;
  }
`;
