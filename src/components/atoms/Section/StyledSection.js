import styled, { css } from 'styled-components';

export const StyledSection = styled.section`
  &.viewsWrapper {
    min-height: 100vh;
    padding-top: 40px;
  }

  ${({ skills }) =>
    skills &&
    css`
      background-color: ${({ theme }) => theme.colors.black};
      padding-bottom: 150px;
    `}

  ${({ projectsViews }) =>
    projectsViews &&
    css`
      height: 100%;
      padding: 40px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: ${({ theme }) => theme.colors.black};
    `}
`;
