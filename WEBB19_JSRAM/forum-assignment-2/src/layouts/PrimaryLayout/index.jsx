import React from "react";

import Navbar from "components/Navbar";
import { MainWrapper, ChildrenWrapper } from "./style";

const PrimaryLayout = ({ children, col }) => {
  return (
    <MainWrapper>
      <Navbar />
      <ChildrenWrapper col={col}>{children}</ChildrenWrapper>
    </MainWrapper>
  );
};

export default PrimaryLayout;
