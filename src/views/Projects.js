import React from "react";
import Div from "../components/atoms/Div";
import ProjectsContent from "../components/organisms/ProjectsContent";
import Technologies from "../components/molecules/Technologies";

const Projects = () => {
  return (
    <>
      <Div projectsViews__wrapper className="projects" id="projects">
        <ProjectsContent />
      </Div>
      <Technologies />
    </>
  );
};

export default Projects;
