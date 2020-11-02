import React, { useContext } from "react";
import { APIContext } from "providers";
import { StockTable } from "components";

import {
  PagesContainer,
  PagesWrapper,
  PagesDescription,
  PagesTitle,
} from "./style";

const IndexesPage = () => {
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
        <PagesTitle>Indexes</PagesTitle>
        <PagesContainer>
          <StockTable
            data={Object.entries(data.indexes.se)}
            properties={properties}
            name={"indexes"}
          />
        </PagesContainer>
        <PagesWrapper>
          <PagesDescription>Select a exchange to read more</PagesDescription>
        </PagesWrapper>
      </>
    )
  );
};

export default IndexesPage;
