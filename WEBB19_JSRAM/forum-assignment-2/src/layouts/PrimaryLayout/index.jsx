import React from "react";

import Navbar from "components/Navbar";
import { MainWrapper, ChildrenWrapper } from "./style";

const PrimaryLayout = ({ children }) => {
  return (
    <MainWrapper>
      <Navbar />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </MainWrapper>
  );
};

export default PrimaryLayout;
