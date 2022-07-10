import styled from 'styled-components';

export const StyledWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
`;

export const StyledBoxButton = styled.div``;

export const StyledButton = styled.button`
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.white};
  padding: 10px 10px;
`;

export const StyledListContainer = styled.div`
  display: none;
  box-shadow: 0px 6px 8px rgba(19, 19, 19, 0.7);

  &.active {
    position: fixed;
    top: 40px;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
