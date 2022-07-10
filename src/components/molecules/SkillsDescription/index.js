import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';
import { StyledCard, StyledParagraph, StyledWrapper } from './StyledSkillsDescription';

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
    <StyledWrapper>
      <StyledCard ref={cardOne}>
        <StyledParagraph>
          My first contact with programming was in a technical school where I create my first pages.
          They were very poor and relied only on html and css. However, at that time I was already
          impressed with the functions of css and its ability to manipulate elements.
        </StyledParagraph>
      </StyledCard>
      <StyledCard ref={cardTwo}>
        <StyledParagraph>
          After an unsuccessful romance with Python. Years later, I returned to frontend and React
          technology. This is what I liked and I would like to develop in it both privately and
          professionally.
        </StyledParagraph>
      </StyledCard>
    </StyledWrapper>
  );
};

export default SkillsDescription;
