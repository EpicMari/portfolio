import React, { useEffect } from 'react';
import Div from '../../atoms/Div';
import Img from '../../atoms/Img';
import Heading from '../../atoms/Heading';
import img2 from '../../../assets/cvvvvvvv.jpg';
import TextScramble from '../../../utils/scrambleText';

const SectionMe = () => {
  useEffect(() => {
    const phrases = ['Martin Reinicke', 'junior frontend developer'];
    const el = document.querySelector('.meText');
    const fx = new TextScramble(el);
    let counter = 0;
    const next = () => {
      fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 800);
      });
      counter = (counter + 1) % phrases.length;
    };
    next();
  }, [window.onload]);

  return (
    <Div sectionMe>
      <Div sectionMe__img>
        <Img src={img2} alt="Martin Reinicke" meImg />
      </Div>
      <Div sectionMe__content>
        <Heading headingType="h1" sectionMe__jobPosition className="meText"></Heading>
      </Div>
      <Div scrollBalls>
        <Div className="scrollBalls__1"></Div>
        <Div className="scrollBalls__2"></Div>
        <Div className="scrollBalls__3"></Div>
      </Div>
    </Div>
  );
};

export default SectionMe;
