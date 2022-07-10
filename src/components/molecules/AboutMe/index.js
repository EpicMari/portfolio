import React, { useEffect } from 'react';
import bikeImg from '../../../assets/bike.jpg';
import greeceImg from '../../../assets/greece.jpg';
import snowboardImg from '../../../assets/snowboard.jpg';
import bieszczadyImg from '../../../assets/bieszczady.jpg';

import { gsap, ScrollTrigger } from 'gsap/all';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import {
  StyledDescription,
  StyledHeader,
  StyledParagraph,
  StyledSlider,
  StyledWrapper,
} from './StyledAboutMe';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const AboutMe = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const aboutMeElement = document.querySelector('.abouteMe');
    gsap.fromTo(
      aboutMeElement,
      { y: '+=100', opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1.5,
        ease: 'easeInOut',
        scrollTrigger: {
          trigger: aboutMeElement,
          start: 'top 70%',
        },
      },
    );
  }, [window.onload]);
  return (
    <StyledWrapper className="abouteMe">
      <StyledHeader>about me</StyledHeader>
      <StyledDescription>
        <StyledParagraph>
          25 years old, based in Katowice, in love hip hop, automotive, snowboard, mountain bike and
          hiking.
        </StyledParagraph>
        <StyledParagraph>
          Self-taught, at the beginning of my career, looking for new challenges and experiences,
          open to gaining new knowledge.
        </StyledParagraph>
      </StyledDescription>
      <StyledSlider>
        <AutoplaySlider play cancelOnInteraction={false} interval={5000} bullets={false}>
          <div data-src={bikeImg} />
          <div data-src={greeceImg} />
          <div data-src={snowboardImg} />
          <div data-src={bieszczadyImg} />
        </AutoplaySlider>
      </StyledSlider>
    </StyledWrapper>
  );
};

export default AboutMe;
