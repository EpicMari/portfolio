import React from "react";
import Div from "../components/atoms/Div";
import ProjectsContent from "../components/organisms/ProjectsContent";

const Projects = () => {
  return (
    <Div projectsViews__wrapper className="projects" id="projects">
      <ProjectsContent />
    </Div>
  );
};

export default Projects;
