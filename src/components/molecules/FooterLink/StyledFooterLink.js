import styled from 'styled-components';

export const StyledWrapper = styled.div``;

export const StyledDecorationLine = styled.div`
  margin: 30px auto;
  height: 1px;
  width: 90%;
  background-image: linear-gradient(
    90deg,
    hsla(0, 0%, 53.3%, 0),
    hsla(0, 0%, 53.3%, 0.3) 20%,
    hsla(0, 0%, 53.3%, 0.3) 80%,
    hsla(0, 0%, 53.3%, 0)
  );
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  max-width: 1000px;

  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    width: 90%;
    margin: 0 auto 30px;
    align-content: center;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

export const StyledBoxLink = styled.div`
  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    display: flex;
  }
`;

export const StyledParagraph = styled.p`
  text-align: center;
  padding: 10px 15px;
  opacity: 0.7;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`;

export const StyledNameSurname = styled.p`
  text-transform: uppercase;
  margin-top: 10px;
  opacity: 0.7;

  @media (min-width: ${({ theme }) => theme.devices.laptop}) {
    margin-top: 0;
  }
`;
