import React from 'react';
import Div from '../components/atoms/Div';
import ProjectsContent from '../components/organisms/ProjectsContent';
import Skills from '../components/organisms/Skills';
import { links } from '../utils/links';

const Projects = () => {
  return (
    <>
      <Div projectsViews__wrapper className="projects" id={links.projects}>
        <ProjectsContent />
      </Div>
      <Skills />
    </>
  );
};

export default Projects;
