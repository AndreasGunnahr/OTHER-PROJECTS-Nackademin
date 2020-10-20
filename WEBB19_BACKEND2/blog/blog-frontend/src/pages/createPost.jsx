import React from "react";
import styled from "styled-components";
import NewPost from "../components/newPost";
import Navbar from "components/navbar";

const Container = styled.div``;

const Home = () => {
  return (
    <Container>
      <Navbar />
      <NewPost />
    </Container>
  );
};

export default Home;
