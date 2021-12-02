import React from "react";
import Div from "../components/atoms/Div";
import HomeContent from "../components/organisms/HomeContent";

const Home = () => {
  return (
    <Div className="viewsWrapper" id="home">
      <HomeContent />
    </Div>
  );
};

export default Home;
