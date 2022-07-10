import React from 'react';
import Img from '../../atoms/Img';
import html from '../../../assets/svg/html.svg';
import css from '../../../assets/svg/css.svg';
import js from '../../../assets/svg/js.svg';
import react from '../../../assets/svg/react.svg';
import redux from '../../../assets/svg/redux.svg';
import git from '../../../assets/svg/git.svg';
import firebase from '../../../assets/svg/firebase.svg';
import styledComponents from '../../../assets/svg/styledComponents.png';
import {
  StyledCard,
  StyledContent,
  StyledHeader,
  StyledLine,
  StyledWrapper,
} from './StyledTechnologies';

const Technologies = () => {
  return (
    <StyledWrapper>
      <StyledContent>
        <StyledLine></StyledLine>
        <StyledHeader>What technologies am I using?</StyledHeader>
        <StyledCard className="card1">
          <Img alt="html icon" src={html} />
        </StyledCard>
        <StyledCard className="card2">
          <Img alt="css icon" src={css} />
        </StyledCard>
        <StyledCard className="card3">
          <Img alt="javascript icon" src={js} />
        </StyledCard>
        <StyledCard className="card4">
          <Img alt="react icon" src={react} />
        </StyledCard>
        <StyledCard className="card5">
          <Img alt="redux icon" src={redux} />
        </StyledCard>
        <StyledCard className="card6">
          <Img alt="git icon" src={git} />
        </StyledCard>
        <StyledCard className="card7">
          <Img alt="firebase icon" src={firebase} />
        </StyledCard>
        <StyledCard className="card8">
          <Img alt="" src={styledComponents} />
        </StyledCard>
      </StyledContent>
    </StyledWrapper>
  );
};

export default Technologies;
