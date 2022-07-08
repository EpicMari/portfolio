import React, { useEffect, useRef } from 'react';
import Div from '../../atoms/Div';
import Paragraph from '../../atoms/Paragraph';
import { gsap, ScrollTrigger } from 'gsap/all';
import { StyledCard } from './StyledSkillsDescription';

const SkillsDescription = () => {
  const cardOne = useRef(null);
  const cardTwo = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (cardOne.current !== null) {
      gsap.fromTo(
        cardOne.current.valueOf(),
        { x: '-=500', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: 'easeInOut',
          scrollTrigger: {
            trigger: cardOne.current.valueOf(),
            start: 'top 70%',
          },
        },
      );

      gsap.fromTo(
        cardTwo.current.valueOf(),
        { x: '+=500', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: 'easeInOut',
          scrollTrigger: {
            trigger: cardOne.current.valueOf(),
            start: 'top 40%',
          },
        },
      );
    }
  }, [window.onload]);

  return (
    <Div skillsDescription>
      <StyledCard ref={cardOne}>
        <Paragraph skillsDescription__description>
          My first contact with programming was in a technical school where I create my first pages.
          They were very poor and relied only on html and css. However, at that time I was already
          impressed with the functions of css and its ability to manipulate elements.
        </Paragraph>
      </StyledCard>
      <StyledCard ref={cardTwo}>
        <Paragraph skillsDescription__description>
          After an unsuccessful romance with Python. Years later, I returned to frontend and React
          technology. This is what I liked and I would like to develop in it both privately and
          professionally.
        </Paragraph>
      </StyledCard>
    </Div>
  );
};

export default SkillsDescription;
