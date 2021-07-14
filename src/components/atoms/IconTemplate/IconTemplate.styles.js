import styled from 'styled-components';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';

// export const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-color: ${({ isActive, theme }) => (isActive ? theme.colors.primaryBlue.hundred : theme.colors.shadesOfGray.zero)};
//   padding: 24px 16px;
//   border-radius: 16px;

//   &:hover {
//     background-color: ${({ theme }) => theme.colors.primaryBlue.twenty};
//   }
// `;

// export const Content = styled.div``;
// export const Center = styled.div``;

export const Wrapper = styled.div`
  background-color: ${({ isActive, theme }) => (isActive ? theme.colors.primaryBlue.hundred : theme.colors.shadesOfGray.zero)};
  padding: 16px 24px;
  border-radius: 16px;
  position: relative;
  cursor: pointer;

  svg {
    margin-bottom: 16px;
  }

  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryBlue.twenty};
  }
`;

export const Content = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const StyledParagraph = styled(Paragraph)`
  color: ${({ isActive, theme }) => (isActive ? theme.colors.shadesOfGray.zero : theme.colors.primaryBlue.hundred)};
`;
