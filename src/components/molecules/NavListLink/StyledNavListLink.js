import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 0;
  height: 0;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.blackGrey};
  animation: 0.7s grow ease forwards;
  text-align: center;

  @keyframes grow {
    100% {
      height: 100vh;
      width: 100vw;
    }
  }

  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    animation-iteration-count: 0;
    height: 40px;
    width: auto;
    background-color: transparent;
  }
`;

export const StyledList = styled.ul`
  width: 85%;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    margin: 0;
    display: flex;
  }
`;

export const StyledListItem = styled.li`
  width: min-content;
  margin: 0 0 30px;
  text-align: left;
  text-transform: uppercase;
  transform: translateY(50px);
  opacity: 0;
  animation: 2s slideUp ease forwards 0.5s;
  position: relative;

  @keyframes slideUp {
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    animation-iteration-count: 0;
    transform: translateY(0);
    opacity: 1;
    margin: 0;
    margin-left: 20px;
  }
`;

export const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  letter-spacing: 2px;
  padding: 10px;

  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    font-size: ${({ theme }) => theme.fontSize.l};
    position: relative;
    &::after {
      position: absolute;
      content: '';
      top: 80%;
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
  }
`;
