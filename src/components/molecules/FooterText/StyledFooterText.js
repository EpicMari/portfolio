import styled from 'styled-components';

export const StyledDescription = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  place-items: center;
  padding: 120px 10px;

  @media screen and (orientation: landscape) and (min-width: ${({ theme }) =>
      theme.devices.tablet}) {
    padding: 50px 0 25px;
  }

  @media screen and (orientation: landscape) and (max-width: ${({ theme }) =>
      theme.devices.desktop}) {
    padding: 100px 0 70px;
  }

  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    padding: 150px 0;
  }
`;

export const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xl};
  display: inline-block;
  padding: 10px 20px;
  position: relative;
  &::after {
    position: absolute;
    content: '';
    top: 90%;
    left: 0;
    width: 100%;
    height: 1.5px;
    background: ${({ theme }) => theme.colors.white};
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.5s;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: center;
  }

  @media (min-width: ${({ theme }) => theme.devices.desktop}) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

export const StyledHeader = styled.h3`
  text-align: center;
  margin-bottom: 5%;
  font-size: 10vw;

  @media (min-width: ${({ theme }) => theme.devices.tablet}) {
    font-size: 8vw;
  }

  @media (min-width: ${({ theme }) => theme.devices.desktopS}) {
    font-size: 6vw;
  }

  @media (min-width: ${({ theme }) => theme.devices.desktopL}) {
    font-size: 4vw;
  }

  @media (min-width: ${({ theme }) => theme.devices.desktopXl}) {
    margin-bottom: 3%;
  }

  @media screen and (orientation: landscape) and (max-width: ${({ theme }) =>
      theme.devices.desktop}) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }

  @media screen and (orientation: portrait) and (max-width: ${({ theme }) =>
      theme.devices.laptop}) {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }
`;
