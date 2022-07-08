import React from 'react';
import ProjectsContent from '../../components/organisms/ProjectsContent';
import Skills from '../../components/organisms/Skills';
import { links } from '../../utils/links';
import { StyledMain } from './StyledProjects';

const Projects = () => {
  return (
    <>
      <StyledMain projectsViews id={links.projects}>
        <ProjectsContent />
      </StyledMain>
      <Skills />
    </>
  );
};

export default Projects;
