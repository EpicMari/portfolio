import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 90%;
  max-width: 1200px;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

export const StyledTitle = styled.h2`
  text-align: left;
  font-size: 2.5em;
  margin-bottom: 40vh;
`;

export const StyledProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xxl};
`;

export const StyledContainer = styled.div`
  display: flex;
`;

export const StyledCards = styled.div``;

export const StyledCard = styled.div`
  height: 400px;
  margin: 50px 0 50px;
  padding: 10%;
  background-color: ${({ theme }) => theme.colors.blackGrey};
  border: 1px solid hsla(0, 0%, 51.4%, 0.16);
  font-size: 36px;
  border-radius: 50px;
  max-width: 750px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:nth-child(1) {
    top: 100px;

    @media (orientation: landscape) {
      top: 40px;
    }

    @media (min-height: ${({ theme }) => theme.devices.laptop}) and (orientation: portrait) {
      top: 160px;
    }

    @media (min-width: ${({ theme }) => theme.devices.desktop}) and (orientation: landscape) {
      top: 140px;
    }

    @media (min-width: 768px) and (orientation: portrait) {
      top: 180px;
    }

    @media (min-width: 900px) and (orientation: portrait) {
      top: 260px;
    }

    @media (min-width: ${({ theme }) =>
        theme.devices.tablet}) and (orientation: landscape) and (min-height: ${({ theme }) =>
        theme.devices.tablet}) {
      top: 80px;
    }

    @media (min-width: 1024px) and (orientation: landscape) {
      top: 180px;
    }

    @media (min-width: ${({ theme }) => theme.devices.desktopS}) and (orientation: landscape) {
      top: 240px;
    }

    @media (min-width: ${({ theme }) =>
        theme.devices.tablet}) and (orientation: portrait) and (min-height: ${({ theme }) =>
        theme.devices.laptop}) {
      top: 200px;
    }
  }
  &:nth-child(2) {
    top: 120px;

    @media (orientation: landscape) {
      top: 60px;
    }

    @media (min-width: ${({ theme }) => theme.devices.laptop}) and (orientation: portrait) {
      top: 180px;
    }

    @media (min-width: ${({ theme }) => theme.devices.desktop}) and (orientation: landscape) {
      top: 160px;
    }

    @media (min-height: ${({ theme }) => theme.devices.laptop}) and (orientation: portrait) {
      top: 180px;
    }

    @media (min-width: 768px) and (orientation: portrait) {
      top: 200px;
    }

    @media (min-width: 900px) and (orientation: portrait) {
      top: 280px;
    }

    @media (min-width: ${({ theme }) =>
        theme.devices.tablet}) and (orientation: landscape) and (min-height: ${({ theme }) =>
        theme.devices.tablet}) {
      top: 100px;
    }

    @media (min-width: 1024px) and (orientation: landscape) {
      top: 200px;
    }

    @media (min-width: ${({ theme }) => theme.devices.desktopS}) and (orientation: landscape) {
      top: 260px;
    }

    @media (min-width: ${({ theme }) =>
        theme.devices.tablet}) and (orientation: portrait) and (min-height: ${({ theme }) =>
        theme.devices.laptop}) {
      top: 220px;
    }
  }
  &:nth-child(3) {
    top: 140px;
    @media (orientation: landscape) {
      top: 80px;
    }

    @media (min-width: ${({ theme }) => theme.devices.laptop}) and (orientation: portrait) {
      top: 200px;
    }

    @media (min-width: ${({ theme }) => theme.devices.desktop}) and (orientation: landscape) {
      top: 180px;
    }

    @media (min-height: ${({ theme }) => theme.devices.laptop}) and (orientation: portrait) {
      top: 200px;
    }

    @media (min-width: 768px) and (orientation: portrait) {
      top: 220px;
    }

    @media (min-width: 900px) and (orientation: portrait) {
      top: 300px;
    }

    @media (min-width: ${({ theme }) =>
        theme.devices.tablet}) and (orientation: landscape) and (min-height: ${({ theme }) =>
        theme.devices.tablet}) {
      top: 120px;
    }

    @media (min-width: 1024px) and (orientation: landscape) {
      top: 220px;
    }

    @media (min-width: ${({ theme }) => theme.devices.desktopS}) and (orientation: landscape) {
      top: 280px;
    }

    @media (min-width: ${({ theme }) =>
        theme.devices.tablet}) and (orientation: portrait) and (min-height: ${({ theme }) =>
        theme.devices.laptop}) {
      top: 240px;
    }
  }
  &:nth-child(4) {
    top: 160px;

    @media (orientation: landscape) {
      top: 100px;
    }

    @media (min-width: ${({ theme }) => theme.devices.laptop}) and (orientation: portrait) {
      top: 220px;
    }

    @media (min-height: ${({ theme }) => theme.devices.laptop}) and (orientation: portrait) {
      top: 220px;
    }

    @media (min-width: ${({ theme }) => theme.devices.desktop}) and (orientation: landscape) {
      top: 200px;
    }

    @media (min-width: 768px) and (orientation: portrait) {
      top: 240px;
    }

    @media (min-width: 900px) and (orientation: portrait) {
      top: 320px;
    }

    @media (min-width: ${({ theme }) =>
        theme.devices.tablet}) and (orientation: landscape) and (min-height: ${({ theme }) =>
        theme.devices.tablet}) {
      top: 140px;
    }

    @media (min-width: 1024px) and (orientation: landscape) {
      top: 240px;
    }

    @media (min-width: ${({ theme }) => theme.devices.desktopS}) and (orientation: landscape) {
      top: 300px;
    }

    @media (min-width: ${({ theme }) =>
        theme.devices.tablet}) and (orientation: portrait) and (min-height: ${({ theme }) =>
        theme.devices.laptop}) {
      top: 260px;
    }
  }

  @media (orientation: landscape) {
    height: 250px;
    padding: 5%;
  }

  @media (min-width: ${({ theme }) => theme.devices.desktop}) and (orientation: landscape) {
    height: 400px;
    padding: 10%;
  }

  @media (min-width: 1024px) and (orientation: landscape) {
    height: 400px;
    padding: 10%;
  }

  @media (min-width: ${({ theme }) =>
      theme.devices.tablet}) and (orientation: landscape) and (min-height: ${({ theme }) =>
      theme.devices.tablet}) {
    height: 300px;
    padding: 10%;
  }

  @media (min-width: ${({ theme }) => theme.devices.desktopS}) and (orientation: landscape) {
    height: 400px;
    padding: 10%;
  }
  @media (min-width: 2000px) and (orientation: landscape) {
    height: 400px;
    padding: 10%;
  }
`;

export const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.l};

  @media (min-width: ${({ theme }) => theme.devices.laptop}) and (orientation: portrait) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  @media (min-width: 768px) and (orientation: portrait) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export const StyledContainerTwo = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 600px;

  @media (min-height: ${({ theme }) => theme.devices.laptop}) and (orientation: portrait) {
    height: 700px;
  }

  @media (min-width: ${({ theme }) => theme.devices.laptop}) and (orientation: portrait) {
    height: 600px;
  }

  @media (min-width: 768px) and (orientation: portrait) {
    height: 800px;
  }

  @media (min-width: 1024px) and (orientation: landscape) {
    height: 750px;
  }

  @media (min-width: ${({ theme }) =>
      theme.devices.tablet}) and (orientation: portrait) and (min-height: ${({ theme }) =>
      theme.devices.laptop}) {
    height: 800px;
  }

  @media (min-width: 900px) and (orientation: portrait) {
    height: 900px;
  }
`;

export const StyledLinkContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const StyledLink = styled.a`
  padding: 10px;
  position: relative;
  &::after {
    position: absolute;
    content: '';
    top: 80%;
    left: 0;
    width: 100%;
    height: 1.5px;
    background: linear-gradient(
      to right,
      rgba(255, 0, 0, 1),
      rgba(255, 0, 180, 1),
      rgba(0, 100, 200, 1)
    );
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.5s;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: center;
  }
`;
