import React, { useEffect } from "react";
import Div from "../../atoms/Div";
import Heading from "../../atoms/Heading";
import Paragraph from "../../atoms/Paragraph";

const SectionProjects = () => {
  useEffect(() => {
    handleScroll();
  }, [window]);
  const handleScroll = () => {
    const wrapper = document.querySelector(".projects");
    const cardOne = document.querySelector(".card1");
    const cardTwo = document.querySelector(".card2");
    const cardThree = document.querySelector(".card3");
    const cardFour = document.querySelector(".card4");
    const wrapperTop = wrapper.offsetTop;
    // document.addEventListener("scroll", () => {
    //   console.log(wrapperTop, "tutaj");
    //   console.log(window.scrollY, "sh");
    //   const scrollY = Math.floor(parseInt(window.scrollY));
    //   if (scrollY > 1500 && scrollY < 1600) {
    //     cardOne.style.opacity = 0.3;
    //   } else if (scrollY > 1600 && scrollY < 1700) {
    //     cardOne.style.opacity = 0.5;
    //   } else if (scrollY > 1700 && scrollY < 1800) {
    //     cardOne.style.opacity = 0.7;
    //   } else if (scrollY > 1800) {
    //     cardOne.style.opacity = 1;
    //   }
    document.addEventListener("scroll", () => {
      const scrollY = Math.floor(parseInt(window.scrollY));
      if (scrollY < wrapperTop) {
        //cart1
        cardOne.style.opacity = 0;
      } else if (scrollY + 1 > wrapperTop && scrollY < wrapperTop + 100) {
        //cart1
        cardOne.style.opacity = 0.1;
        cardOne.style.transform = "translate3d(0, 120%, 0) scale3d(1, 1, 1)";
      } else if (scrollY + 1 > wrapperTop + 100 && scrollY < wrapperTop + 200) {
        //cart1
        cardOne.style.opacity = 0.5;
        cardOne.style.transform = "translate3d(0, 70%, 0) scale3d(1, 1, 1)";
        //cart2
      } else if (scrollY + 1 > wrapperTop + 200 && scrollY < wrapperTop + 300) {
        //cart1
        cardOne.style.opacity = 1;
        cardOne.style.transform = "translate3d(0, 20%, 0) scale3d(1, 1, 1)";
        //cart2
        cardTwo.style.opacity = 0;
        cardTwo.style.transform = "translate3d(0, 190%, 0) scale3d(1, 1, 1)";
      } else if (scrollY + 1 > wrapperTop + 300 && scrollY < wrapperTop + 400) {
        //cart1
        cardOne.style.transform = "translate3d(0, -20%, 0) scale3d(1, 1, 1)";
        //cart2
        cardTwo.style.opacity = 0.1;
        cardTwo.style.transform = "translate3d(0, 120%, 0) scale3d(1, 1, 1)";
      } else if (scrollY + 1 > wrapperTop + 400 && scrollY < wrapperTop + 500) {
        //cart2
        cardTwo.style.opacity = 0.5;
        cardTwo.style.transform = "translate3d(0, 70%, 0) scale3d(1, 1, 1)";
      } else if (scrollY + 1 > wrapperTop + 500 && scrollY < wrapperTop + 600) {
        //cart1
        cardOne.style.transform =
          "translate3d(0, -25%, 0) scale3d(0.95, 0.95, 1)";
        //cart2
        cardTwo.style.opacity = 1;
        cardTwo.style.transform = "translate3d(0, 20%, 0) scale3d(1, 1, 1)";
        //cart3
        cardThree.style.opacity = 0;
        cardThree.style.transform = "translate3d(0, 190%, 0) scale3d(1, 1, 1)";
      } else if (scrollY + 1 > wrapperTop + 600 && scrollY < wrapperTop + 700) {
        //cart1
        cardOne.style.transform =
          "translate3d(0, -30%, 0) scale3d(0.9, 0.9, 1)";
        //cart2
        cardTwo.style.transform = "translate3d(0, -20%, 0) scale3d(1, 1, 1)";
        //cart3
        cardThree.style.opacity = 0.1;
        cardThree.style.transform = "translate3d(0, 120%, 0) scale3d(1, 1, 1)";
      } else if (scrollY + 1 > wrapperTop + 700 && scrollY < wrapperTop + 800) {
        //cart3
        cardThree.style.opacity = 0.5;
        cardThree.style.transform = "translate3d(0, 70%, 0) scale3d(1, 1, 1)";
      } else if (scrollY + 1 > wrapperTop + 800 && scrollY < wrapperTop + 900) {
        //cart1
        cardOne.style.transform =
          "translate3d(0, -35%, 0) scale3d(0.85, 0.85, 1)";
        //cart2
        cardTwo.style.transform =
          "translate3d(0, -25%, 0) scale3d(0.95, 0.95, 1)";
        //cart3
        cardThree.style.opacity = 1;
        cardThree.style.transform = "translate3d(0, 20%, 0) scale3d(1, 1, 1)";
        //cart4
        cardFour.style.opacity = 0;
        cardFour.style.transform = "translate3d(0, 190%, 0) scale3d(1, 1, 1)";
      } else if (
        scrollY + 1 > wrapperTop + 900 &&
        scrollY < wrapperTop + 1000
      ) {
        //cart1
        cardOne.style.transform =
          "translate3d(0, -40%, 0) scale3d(0.8, 0.8, 1)";
        //cart2
        cardTwo.style.transform =
          "translate3d(0, -30%, 0) scale3d(0.9, 0.9, 1)";
        //cart3
        cardThree.style.transform = "translate3d(0, -20%, 0) scale3d(1, 1, 1)";
        //cart4
        cardFour.style.opacity = 0.1;
        cardFour.style.transform = "translate3d(0, 120%, 0) scale3d(1, 1, 1)";
      } else if (
        scrollY + 1 > wrapperTop + 1000 &&
        scrollY < wrapperTop + 1100
      ) {
        //cart4
        cardFour.style.opacity = 0.5;
        cardFour.style.transform = "translate3d(0, 70%, 0) scale3d(1, 1, 1)";
      } else if (
        scrollY + 1 > wrapperTop + 1100 &&
        scrollY < wrapperTop + 1200
      ) {
        //cart1
        cardOne.style.transform =
          "translate3d(0, -45%, 0) scale3d(0.75, 0.75, 1)";
        //cart2
        cardTwo.style.transform =
          "translate3d(0, -35%, 0) scale3d(0.85, 0.85, 1)";
        //cart3
        cardThree.style.transform =
          "translate3d(0, -25%, 0) scale3d(0.95, 0.95, 1)";
        //cart4
        cardFour.style.opacity = 1;
        cardFour.style.transform = "translate3d(0, 20%, 0) scale3d(1, 1, 1)";
      } else if (
        scrollY + 1 > wrapperTop + 1200 &&
        scrollY < wrapperTop + 1300
      ) {
        //cart1
        cardOne.style.transform =
          "translate3d(0, -50%, 0) scale3d(0.70, 0.70, 1)";
        //cart2
        cardTwo.style.transform =
          "translate3d(0, -40%, 0) scale3d(0.80, 0.80, 1)";
        //cart3
        cardThree.style.transform =
          "translate3d(0, -30%, 0) scale3d(0.90, 0.90, 1)";
        //cart4
        cardFour.style.transform = "translate3d(0, -20%, 0) scale3d(1, 1, 1)";
      }
    });
  };

  const styles = {
    transform: `translate3d(0px, 120%, 0px) scale3d(1, 1, 1)`,
    opacity: 0,
    willChange: "transform, opacity",
    transformStyle: "preserve-3d",
    transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
  };
  return (
    <Div sectionProjects>
      <Div sectionProjects__wrapper>
        <Div sectionProjects__container>
          <Div sectionProjects__sectionTitle>
            <Heading headingType="h2" sectionProjects__headingTitleSection>
              My projects
            </Heading>
          </Div>
          <Div sectionProjects__projectsCards>
            <Div
              className="card card1"
              sectionProjects__projectsCard
              style={styles}
              onScroll={handleScroll}
            >
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                dolores harum obcaecati incidunt repellat nulla quidem iure eius
                blanditiis facilis, provident corporis laborum illum tempora!
                Nostrum veniam eius ut ea!
              </Paragraph>
            </Div>
            <Div
              className="card card2"
              sectionProjects__projectsCard
              style={styles}
              onScroll={handleScroll}
            >
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                natus ad repellat, quis, molestiae architecto fuga tenetur
                quidem voluptatum alias vero facilis numquam, hic deleniti
                voluptate nisi odio suscipit nobis!
              </Paragraph>
            </Div>
            <Div
              className="card card3"
              sectionProjects__projectsCard
              style={styles}
              onScroll={handleScroll}
            >
              <Paragraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                sapiente quasi nesciunt nisi numquam at eos sequi obcaecati
                voluptate id, vero eveniet inventore autem qui delectus? Quae
                mollitia deserunt facilis!
              </Paragraph>
            </Div>
            <Div
              className="card card4"
              sectionProjects__projectsCard
              style={styles}
              onScroll={handleScroll}
            >
              <Paragraph>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                sapiente quasi nesciunt nisi numquam at eos sequi obcaecati
                voluptate id, vero eveniet inventore autem qui delectus? Quae
                mollitia deserunt facilis!
              </Paragraph>
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default SectionProjects;
