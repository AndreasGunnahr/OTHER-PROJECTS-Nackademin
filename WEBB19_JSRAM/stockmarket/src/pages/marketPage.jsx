import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { APIContext } from "providers";
import { StockTable } from "components";
import {
  PagesContainer,
  PagesWrapper,
  PagesDescription,
  PagesTitle,
} from "./style";

const MarketPage = () => {
  let { name } = useParams();

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
        <PagesTitle>Overview {name} </PagesTitle>
        <PagesContainer>
          <StockTable
            data={Object.entries(data.markets[name])}
            properties={properties}
            name={"market"}
            url={name}
          />
        </PagesContainer>
        <PagesWrapper>
          <PagesDescription>Select a exchange to read more</PagesDescription>
        </PagesWrapper>
      </>
    )
  );
};

export default MarketPage;
