import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 100%;
  padding-bottom: 150px;
`;

export const StyledContent = styled.div`
  width: 100%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto 100px 100px 100px 100px;
  gap: 20px 10px;
  place-items: center;
  margin: 0 auto;
`;

export const StyledLine = styled.div`
  height: 470px;
  width: 1px;
  grid-area: 2 / 2 / 5 / 2;
  align-self: start;
  background-image: linear-gradient(
    0deg,
    hsla(0, 0%, 53.3%, 0),
    hsla(0, 0%, 53.3%, 0.3) 20%,
    hsla(0, 0%, 53.3%, 0.3) 80%,
    hsla(0, 0%, 53.3%, 0)
  );
`;

export const StyledCard = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.blackGrey};
  border: 1px solid hsla(0, 0%, 51.4%, 0.16);
  display: grid;
  & img {
    grid-area: center;
    height: 52px;
    width: 52px;
    @media (min-width: ${({ theme }) => theme.devices.tablet}) {
      height: 54px;
      width: 54px;
    }
    @media (min-width: ${({ theme }) => theme.devices.desktop}) {
      height: 56px;
      width: 56px;
    }
    @media (min-width: ${({ theme }) => theme.devices.desktopM}) {
      height: 58px;
      width: 58px;
    }
    @media (min-width: ${({ theme }) => theme.devices.desktopL}) {
      height: 60px;
      width: 60px;
    }
  }

  &.card8 {
    grid-area: 5 / 3 / 5 / 3;
  }
`;

export const StyledHeader = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 2em;
  width: 100%;
  padding: 0 20px;
  margin: 0 0 60px;
  grid-area: 1 / 1 / 1 / 4;

  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    font-size: 3.5vw;
  }

  @media (min-width: ${({ theme }) => theme.devices.desktopL}) {
    margin: 0 0 100px;
  }
`;
