import Head from "next/head";

import Navbar from "components/Navbar";
import { MainWrapper, ChildrenWrapper } from "./style";

const PrimaryLayout = ({ children, placement }) => {
  return (
    <MainWrapper>
      <Head>
        <title>Magic CMS ⭐ </title>
      </Head>
      <Navbar />
      <ChildrenWrapper placement={placement}>{children}</ChildrenWrapper>
    </MainWrapper>
  );
};

export default PrimaryLayout;
