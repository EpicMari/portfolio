import React from "react";
import Div from "../../atoms/Div";
import Paragraph from "../../atoms/Paragraph";
import Heading from "../../atoms/Heading";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const AboutMeText = () => {
  return (
    <Div aboutMeText__wrapper>
      <Div aboutMeText__text>
        <Heading headingType="h2" aboutMeText__heading>
          about me
        </Heading>
        <Paragraph>
          25 years old, based in Katowice, in love hip hop, automotive, mountain
          bike and hiking.
        </Paragraph>
        <Paragraph>
          Self-taught, at the beginning of my career, looking for new challenges
          and experiences, open to gaining new knowledge.
        </Paragraph>
      </Div>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={5000}
        bullets={false}
      >
        <div data-src="/path/to/image-0.jpg" />
        <div data-src="/path/to/image-1.jpg" />
        <div data-src="/path/to/image-2.jpg" />
        <div data-src="/path/to/image-3.jpg" />
      </AutoplaySlider>
    </Div>
  );
};

export default AboutMeText;
