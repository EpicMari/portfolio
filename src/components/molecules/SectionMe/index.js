import React from 'react';
import Div from '../../atoms/Div';
import Heading from '../../atoms/Heading';
import Img from '../../atoms/Img';
import img2 from '../../../assets/cvvvvvvv.jpg';

const SectionMe = () => {
  return (
    <Div sectionMe>
      <Div sectionMe__img>
        <Img src={img2} alt="Martin Reinicke" meImg />
      </Div>
      <Div sectionMe__content>
        <Heading headingType="h2" sectionMe__name>
          Martin Reinicke
        </Heading>
        <Heading headingType="h1" sectionMe__jobPosition>
          junior frontend developer
        </Heading>
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
