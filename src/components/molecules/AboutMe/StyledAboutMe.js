import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: grid;
  grid-template-rows: 0.2fr auto 0.8fr;
  height: 100%;
  width: 100%;
  place-items: center;

  @media (min-width: ${({ theme }) => theme.devices.desktop}) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr auto 1fr;
  }
`;

export const StyledDescription = styled.div`
  width: 80%;

  @media screen and (orientation: landscape) and (max-width: ${({ theme }) =>
      theme.devices.desktop}) {
    width: 60%;
  }
`;

export const StyledSlider = styled.div`
  width: 80%;
  place-self: center;
  max-width: 800px;
  margin-top: 80px;

  @media (min-width: ${({ theme }) => theme.devices.desktop}) {
    grid-area: 1 / 3;
    margin-top: 0;
  }

  @media screen and (orientation: landscape) and (max-width: ${({ theme }) =>
      theme.devices.laptop}) {
    max-width: 400px;
  }

  @media screen and (orientation: landscape) and (max-width: ${({ theme }) =>
      theme.devices.desktop}) {
    max-width: 400px;
  }
`;

export const StyledParagraph = styled.p`
  font-size: 1.5em;

  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    font-size: 2.3vw;
  }

  &:last-child {
    margin-top: 40px;
  }

  @media (min-width: ${({ theme }) => theme.devices.desktop}) {
    width: 70%;
  }
`;

export const StyledHeader = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 2em;
  margin: 40px 0;

  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    font-size: 3.5vw;
  }

  @media (min-width: ${({ theme }) => theme.devices.desktop}) {
    grid-area: 1 / 2;
    transform: rotate(-90deg);
    margin: 0;
  }
`;
