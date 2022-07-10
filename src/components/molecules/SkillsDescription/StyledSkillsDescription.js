import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: grid;
  justify-content: center;
  width: 100%;
  padding: 0 5%;
  margin: 0 auto;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.devices.desktop}) {
    padding: 0;
    align-items: center;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 300px 300px;
  }
`;

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.blackGrey};
  border: 1px solid hsla(0, 0%, 51.4%, 0.16);
  border-radius: 25px;
  padding: 10%;
  max-width: 400px;

  &:first-child {
    margin-bottom: 40px;
  }

  @media (min-width: ${({ theme }) => theme.devices.desktop}) {
    padding: 5%;
    max-width: 500px;
    height: 100%;
    grid-area: 2 / 2;
    display: grid;
    place-items: center;
    &:first-child {
      grid-area: 1 / 1;
      margin-bottom: 0;
      justify-self: flex-end;
    }
  }
`;

export const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};

  @media (min-width: ${({ theme }) => theme.devices.desktop}) {
    font-size: 20px;
  }
`;
