import React from "react";
import Div from "../../atoms/Div";
import Heading from "../../atoms/Heading";
import Img from "../../atoms/Img";
import html from "../../../assets/svg/html.svg";
import css from "../../../assets/svg/css.svg";
import js from "../../../assets/svg/js.svg";
import react from "../../../assets/svg/react.svg";
import redux from "../../../assets/svg/redux.svg";
import git from "../../../assets/svg/git.svg";
import firebase from "../../../assets/svg/firebase.svg";
import styledComponents from "../../../assets/svg/styledComponents.png";

const Technologies = () => {
  return (
    <Div technologies>
      <Div technologies__line></Div>
      <Heading technologies__heading headingType="h2" sectionHeader>
        What technologies am I using?
      </Heading>
      <Div technologies__card className="card1">
        <Img alt="html icon" src={html} />
      </Div>
      <Div technologies__card className="card2">
        <Img alt="css icon" src={css} />
      </Div>
      <Div technologies__card className="card3">
        <Img alt="javascript icon" src={js} />
      </Div>
      <Div technologies__card className="card4">
        <Img alt="react icon" src={react} />
      </Div>
      <Div technologies__card className="card5">
        <Img alt="redux icon" src={redux} />
      </Div>
      <Div technologies__card className="card6">
        <Img alt="git icon" src={git} />
      </Div>
      <Div technologies__card className="card7">
        <Img alt="firebase icon" src={firebase} />
      </Div>
      <Div technologies__card className="card8">
        <Img alt="" src={styledComponents} />
      </Div>
    </Div>
  );
};

export default Technologies;
