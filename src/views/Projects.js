import React from "react";
import Div from "../components/atoms/Div";
import ProjectsContent from "../components/organisms/ProjectsContent";
import Skills from "../components/organisms/Skills";

const Projects = () => {
  return (
    <>
      <Div projectsViews__wrapper className="projects" id="projects">
        <ProjectsContent />
      </Div>
      <Skills />
    </>
  );
};

export default Projects;
