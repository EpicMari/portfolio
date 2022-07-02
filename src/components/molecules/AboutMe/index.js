import React from 'react';
import Div from '../../atoms/Div';
import Paragraph from '../../atoms/Paragraph';
import Heading from '../../atoms/Heading';
import bikeImg from '../../../assets/bike.jpg';
import greeceImg from '../../../assets/greece.jpg';
import snowboardImg from '../../../assets/snowboard.jpg';
import bieszczadyImg from '../../../assets/bieszczady.jpg';

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const AboutMe = () => {
  return (
    <Div aboutMeText>
      <Heading headingType="h2" sectionHeader aboutMeText__heading>
        about me
      </Heading>
      <Div aboutMeText__text>
        <Paragraph aboutMeText__description>
          25 years old, based in Katowice, in love hip hop, automotive, snowboard, mountain bike and
          hiking.
        </Paragraph>
        <Paragraph aboutMeText__description>
          Self-taught, at the beginning of my career, looking for new challenges and experiences,
          open to gaining new knowledge.
        </Paragraph>
      </Div>
      <Div aboutMeText__slider>
        <AutoplaySlider play cancelOnInteraction={false} interval={5000} bullets={false}>
          <div data-src={bikeImg} />
          <div data-src={greeceImg} />
          <div data-src={snowboardImg} />
          <div data-src={bieszczadyImg} />
        </AutoplaySlider>
      </Div>
    </Div>
  );
};

export default AboutMe;
