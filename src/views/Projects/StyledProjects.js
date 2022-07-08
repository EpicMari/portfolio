import styled from 'styled-components';

export const StyledMain = styled.main`
  height: 100%;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.black};
`;
