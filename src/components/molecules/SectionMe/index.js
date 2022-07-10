import React, { useEffect } from 'react';
import img2 from '../../../assets/cvvvvvvv.jpg';
import TextScramble from '../../../utils/scrambleText';
import {
  StyledAnimationWrapper,
  StyledBoxImg,
  StyledContentScrableText,
  StyledHeader,
  StyledImg,
  StyledWrapper,
} from './StyledSectionMe';

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
    <StyledWrapper>
      <StyledBoxImg>
        <StyledImg src={img2} alt="Martin Reinicke" />
      </StyledBoxImg>
      <StyledContentScrableText>
        <StyledHeader className="meText"></StyledHeader>
      </StyledContentScrableText>
      <StyledAnimationWrapper>
        <div className="scrollBalls__1"></div>
        <div className="scrollBalls__2"></div>
        <div className="scrollBalls__3"></div>
      </StyledAnimationWrapper>
    </StyledWrapper>
  );
};

export default SectionMe;
