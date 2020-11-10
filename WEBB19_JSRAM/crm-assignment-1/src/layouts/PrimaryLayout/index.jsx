import React from "react";

import Navbar from "components/Navbar";
import { MainWrapper, ChildrenWrapper } from "./style";

const PrimaryLayout = ({ children, placement }) => {
  return (
    <MainWrapper>
      <Navbar />
      <ChildrenWrapper placement={placement}>{children}</ChildrenWrapper>
    </MainWrapper>
  );
};

export default PrimaryLayout;
