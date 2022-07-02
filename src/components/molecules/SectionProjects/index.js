import React, { useEffect } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';
import {
  StyledCard,
  StyledCards,
  StyledContainer,
  StyledContainerTwo,
  StyledTitle,
  StyledWrapper,
  StyledParagraph,
  StyledLink,
  StyledLinkContainer,
  StyledProjectTitle,
} from './StyledSectionProjects';

const SectionProjects = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray('.card');

    cards.forEach((card, index) => {
      // eslint-disable-next-line no-unused-vars
      const tween = gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: () => `top bottom-=100`,
          end: () => `top bottom`,
          scrub: false,
          markers: false,
          invalidateOnRefresh: true,
        },
        ease: 'none',
        scale: () => 1 - (cards.length - index) * 0.025,
      });

      ScrollTrigger.create({
        trigger: card,
        start: 'top top',
        pin: true,
        pinSpacing: false,
        markers: false,
        id: 'pin',
        end: 'max-=2200',
        invalidateOnRefresh: true,
      });
    });
  }, [window.load]);

  return (
    <StyledWrapper>
      <StyledTitle>My projects</StyledTitle>
      <StyledContainer>
        <StyledCards>
          <StyledCard className="card">
            <StyledProjectTitle>Admin Panel</StyledProjectTitle>
            <StyledParagraph>
              Admin panel made in React. Includes mailbox based on Gmail API. Weather widget which
              is based on geolocation. Firebase for viewing and editing orders as well as logging in
              and creating accounts.
            </StyledParagraph>
            <StyledLinkContainer>
              <StyledLink href="https://admin-panel-shop-online.netlify.app" target="_blank">
                Live
              </StyledLink>
              <StyledLink href="https://github.com/EpicMari/admin_panel" target="_blank">
                Github
              </StyledLink>
            </StyledLinkContainer>
          </StyledCard>
          <StyledCard className="card">
            <StyledProjectTitle>Shop Online</StyledProjectTitle>
            <StyledParagraph>
              An online store application is a mapping of a real online store. Where we have such
              functionalities, a database in firebase, paypal, contact with the seller, return mail
              after purchase.
            </StyledParagraph>
            <StyledLinkContainer>
              <StyledLink href="https://bicycle-shop-online-react.netlify.app/" target="_blank">
                Live
              </StyledLink>
              <StyledLink href="https://github.com/EpicMari/shop_online" target="_blank">
                Github
              </StyledLink>
            </StyledLinkContainer>
          </StyledCard>
          <StyledCard className="card">
            <StyledProjectTitle>Movie Base</StyledProjectTitle>
            <StyledParagraph>
              Application using any API for learning. In the project, I also used class components
              for their mastering, Local Storage, so that after refreshing, data such as favorite
              movies or the page of watched movies remain as they were and movie search.
            </StyledParagraph>
            <StyledLinkContainer>
              <StyledLink href="https://moviebase-react-app.netlify.app/" target="_blank">
                Live
              </StyledLink>
              <StyledLink href="https://github.com/EpicMari/MovieBase" target="_blank">
                Github
              </StyledLink>
            </StyledLinkContainer>
          </StyledCard>
          <StyledCard className="card">
            <StyledProjectTitle>Cook Book</StyledProjectTitle>
            <StyledParagraph>
              My first application using any API for learning. In the project, I also used class
              components to master them. Ability to search and add recipes to favorites.{' '}
            </StyledParagraph>
            <StyledLinkContainer>
              <StyledLink href="https://cook-book-react-app.netlify.app/" target="_blank">
                Live
              </StyledLink>
              <StyledLink href="https://github.com/EpicMari/cook-book" target="_blank">
                Github
              </StyledLink>
            </StyledLinkContainer>
          </StyledCard>
        </StyledCards>
      </StyledContainer>
      <StyledContainerTwo></StyledContainerTwo>
    </StyledWrapper>
  );
};

export default SectionProjects;
