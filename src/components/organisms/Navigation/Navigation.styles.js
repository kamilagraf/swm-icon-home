import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.shadesOfGray.zero};
  box-shadow: 0px 4px 0px #f5f7ff;
  display: flex;
  top: 0;
  z-index: 1;
  position: sticky;

  @media screen and (min-width: 1441px) {
    height: 100px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
  margin: 20px auto 20px 30px;

  .logo {
    margin-right: 16px;
    width: 74px;
    height: 40px;
  }

  @media screen and (min-width: 540px) {
    margin: 20px 20px 20px 30px;
  }

  @media screen and (min-width: 1025px) {
    margin: 20px 30px;
    width: 340px;
  }

  @media screen and (min-width: 1441px) {
    margin: 24px 40px;
    width: 400px;
    height: 52px;

    .logo {
      margin-right: 24px;
      width: 94px;
      height: 52px;
    }
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;

  .search-input,
  a {
    display: none;
  }

  @media screen and (min-width: 540px) {
    margin: 20px 30px 20px auto;

    a {
      display: flex;
    }
  }

  @media screen and (min-width: 1025px) {
    margin: 20px 40px;
    width: 100%;

    .search-input {
      display: flex;
    }

    a {
      justify-items: end;
    }
  }

  @media screen and (min-width: 1441px) {
    margin: 24px 60px;
    height: 52px;
  }
`;
