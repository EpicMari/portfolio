import React, { useEffect } from 'react';
import Div from '../../atoms/Div';
import Paragraph from '../../atoms/Paragraph';
import { gsap, ScrollTrigger } from 'gsap/all';

const SkillsDescription = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cardOne = document.querySelector('.skillsDescriptionOne');
    const cardTwo = document.querySelector('.skillsDescriptionTwo');

    gsap.fromTo(
      cardOne,
      { x: '-=500', opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'easeInOut',
        scrollTrigger: {
          trigger: cardOne,
          start: 'top 70%',
        },
      },
    );

    gsap.fromTo(
      cardTwo,
      { x: '+=500', opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'easeInOut',
        scrollTrigger: {
          trigger: cardOne,
          start: 'top 40%',
        },
      },
    );
  }, [window.load]);
  return (
    <Div skillsDescription>
      <Div className="skillsDescriptionOne" skillsDescription__descriptionContent>
        <Paragraph skillsDescription__description>
          My first contact with programming was in a technical school where I create my first pages.
          They were very poor and relied only on html and css. However, at that time I was already
          impressed with the functions of css and its ability to manipulate elements.
        </Paragraph>
      </Div>
      <Div className="skillsDescriptionTwo" skillsDescription__descriptionContent>
        <Paragraph skillsDescription__description>
          After an unsuccessful romance with Python. Years later, I returned to frontend and React
          technology. This is what I liked and I would like to develop in it both privately and
          professionally.
        </Paragraph>
      </Div>
    </Div>
  );
};

export default SkillsDescription;
