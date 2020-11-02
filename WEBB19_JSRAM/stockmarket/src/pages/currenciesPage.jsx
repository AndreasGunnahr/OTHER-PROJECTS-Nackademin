import React, { useContext } from "react";
import { APIContext } from "providers";

import { StockTable } from "components";

import {
  PagesContainer,
  PagesWrapper,
  PagesDescription,
  PagesTitle,
} from "./style";

const CurrenciesPage = () => {
  const { data } = useContext(APIContext);
  const properties = [
    "name",
    "market",
    "price",
    "source",
    "ticker",
    "today",
    "mtd",
  ];

  return (
    data && (
      <>
        <PagesTitle>Currencies</PagesTitle>
        <PagesContainer>
          <StockTable
            data={Object.entries(data.currencies.sek)}
            properties={properties}
            name={"currencies"}
          />
        </PagesContainer>
        <PagesWrapper>
          <PagesDescription>Select a exchange to read more</PagesDescription>
        </PagesWrapper>
      </>
    )
  );
};

export default CurrenciesPage;
