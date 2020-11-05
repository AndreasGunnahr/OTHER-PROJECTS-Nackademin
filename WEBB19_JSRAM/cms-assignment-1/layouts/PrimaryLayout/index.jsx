import Head from "next/head";

import Navbar from "components/Navbar";
import { MainWrapper, ChildrenWrapper } from "./style";

const PrimaryLayout = ({ children }) => {
  return (
    <MainWrapper>
      <Head>
        <title>Magic CMS ⭐ </title>
      </Head>
      <Navbar />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </MainWrapper>
  );
};

export default PrimaryLayout;
