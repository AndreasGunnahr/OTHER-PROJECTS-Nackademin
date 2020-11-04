import Head from "next/head";

import Navbar from "components/Navbar";
import { MainWrapper } from "./style";

const PrimaryLayout = ({ children }) => {
  return (
    <MainWrapper>
      <Head>
        <title>Magic CMS ⭐ </title>
      </Head>
      <Navbar />
      {children}
    </MainWrapper>
  );
};

export default PrimaryLayout;
