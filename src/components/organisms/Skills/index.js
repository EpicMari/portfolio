import React from "react";
import Div from "../../atoms/Div";
import SkillsDescription from "../../molecules/SkillsDescription";
import Technologies from "../../molecules/Technologies";

const Skills = () => {
  return (
    <Div skills>
      <Technologies />
      <SkillsDescription />
    </Div>
  );
};

export default Skills;
