import React, { useContext } from "react";
import { APIContext } from "providers";
import { StockTable } from "components";

import {
  PagesContainer,
  PagesWrapper,
  PagesDescription,
  PagesTitle,
} from "./style";

const CryptoPage = () => {
  const { data } = useContext(APIContext);
  const properties = ["name", "market", "price", "source", "ticker", "today"];
  return (
    data && (
      <>
        <PagesTitle>Crypto</PagesTitle>
        <PagesContainer>
          <StockTable
            data={Object.entries(data.crypto.usd)}
            properties={properties}
            name={"crypto"}
          />
        </PagesContainer>
        <PagesWrapper>
          <PagesDescription>Select a exchange to read more</PagesDescription>
        </PagesWrapper>
      </>
    )
  );
};

export default CryptoPage;
