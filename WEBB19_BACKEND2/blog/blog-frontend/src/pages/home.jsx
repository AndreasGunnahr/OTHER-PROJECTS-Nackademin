import React from "react";
import styled from "styled-components";
import Posts from "components/posts";
import Navbar from "components/navbar";

const HomeContainer = styled.div``;

const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <Posts />
    </HomeContainer>
  );
};

export default Home;
