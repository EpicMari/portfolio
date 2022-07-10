import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: calc(100vh - 40px);
  padding: 80px 0 20px;
  margin: 0 20px;

  @media (max-height: ${({ theme }) => theme.devices.laptop}) and (orientation: portrait) {
    padding: 10% 0 20px;
  }

  @media (min-width: ${({ theme }) => theme.devices.tablet}) and (orientation: landscape) {
    padding-top: 30px;
  }
  @media (min-width: ${({ theme }) => theme.devices.desktop}) and (orientation: landscape) {
    padding-top: 60px;
  }
`;

export const StyledBoxImg = styled.div`
  height: 40vh;
  width: 40vh;
  max-width: 300px;
  max-height: 300px;
  padding: 60px;
  border-radius: 50%;
  margin-bottom: 20px;

  @media (max-height: ${({ theme }) => theme.devices.laptop}) and (orientation: portrait) {
    padding: 15%;
    margin-bottom: 0;
  }

  @media (min-width: ${({ theme }) => theme.devices.tablet}) and (orientation: landscape) {
    padding: 10px;
    height: 30vh;
    width: 30vh;
    margin-bottom: 0;
  }
`;

export const StyledContentScrableText = styled.div`
  overflow-wrap: anywhere;
`;

export const StyledAnimationWrapper = styled.div`
  position: relative;
  width: 10px;
  height: 60px;
  margin: 0 auto;

  & .scrollBalls__1,
  & .scrollBalls__2,
  & .scrollBalls__3 {
    position: absolute;
    border-radius: 50%;
    height: 10px;
    width: 10px;
    background-color: ${({ theme }) => theme.colors.white};
    animation-name: ball1;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease;
  }

  & .scrollBalls__2 {
    animation-name: ball2;
  }

  & .scrollBalls__3 {
    animation-name: ball3;
  }

  @keyframes ball1 {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    40%,
    100% {
      opacity: 1;
      transform: translateY(50px);
    }
  }
  @keyframes ball2 {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0.6;
    }
    60% {
      transform: translateY(50px);
      opacity: 0.6;
    }
    61% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes ball3 {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0.3;
    }
    90% {
      transform: translateY(50px);
      opacity: 0.3;
    }
    91% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 0 50px ${({ theme }) => theme.colors.grey};
`;

export const StyledHeader = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.xxxl};

  @media (min-width: ${({ theme }) => theme.devices.tablet}) {
    font-size: ${({ theme }) => theme.fontSize.bigFont.xxs};
  }
  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    font-size: ${({ theme }) => theme.fontSize.bigFont.xs};
  }
  @media (min-width: ${({ theme }) => theme.devices.desktop}) {
    font-size: ${({ theme }) => theme.fontSize.bigFont.s};
  }
  @media (min-width: ${({ theme }) => theme.devices.desktopM}) {
    font-size: ${({ theme }) => theme.fontSize.bigFont.m};
  }
  @media (min-width: ${({ theme }) => theme.devices.desktopL}) {
    font-size: ${({ theme }) => theme.fontSize.bigFont.l};
  }
  @media (min-width: ${({ theme }) => theme.devices.desktopXl}) {
    font-size: ${({ theme }) => theme.fontSize.bigFont.xl};
  }
  @media (min-width: ${({ theme }) => theme.devices.screenFullHd}) {
    font-size: ${({ theme }) => theme.fontSize.bigFont.xxl};
  }
  @media (max-height: ${({ theme }) => theme.devices.laptop}) and (orientation: portrait) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
  @media (max-height: ${({ theme }) => theme.devices.tablet}) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;
