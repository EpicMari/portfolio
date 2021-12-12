import React from "react";
import Div from "../../atoms/Div";
import Paragraph from "../../atoms/Paragraph";

const SkillsDescription = () => {
  return (
    <Div skillsDescription>
      <Div skillsDescription__descriptionContent>
        <Paragraph skillsDescription__description>
          My first contact with programming was in a technical school where I
          create my first pages. They were very poor and relied only on html and
          css. However, at that time I was already impressed with the functions
          of css and its ability to manipulate elements.
        </Paragraph>
      </Div>
      <Div skillsDescription__descriptionContent>
        <Paragraph skillsDescription__description>
          After an unsuccessful romance with Python. Years later, I returned to
          frontend and React technology. This is what I liked and I would like
          to develop in it both privately and professionally.
        </Paragraph>
      </Div>
    </Div>
  );
};

export default SkillsDescription;
