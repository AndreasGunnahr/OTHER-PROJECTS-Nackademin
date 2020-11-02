import React from "react";
import { HomeContainer, BackgroundImage, HomeTitle } from "./style";
import Image from "../assets/bitcoin.svg";

const HomePage = () => {
  return (
    <HomeContainer>
      <BackgroundImage background={Image} />
      <HomeTitle>Learn all about the stockmarket</HomeTitle>
    </HomeContainer>
  );
};

export default HomePage;
