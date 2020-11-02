import React, { useContext } from "react";
import { APIContext } from "providers";
import { StockTable } from "components";
import {
  PagesContainer,
  PagesWrapper,
  PagesDescription,
  PagesTitle,
} from "./style";

const MarketsPage = () => {
  const { data } = useContext(APIContext);
  const properties = ["markets"];

  return (
    data && (
      <>
        <PagesTitle>Markets</PagesTitle>
        <PagesContainer>
          <StockTable
            data={Object.keys(data.markets)}
            properties={properties}
            name={"markets"}
          />
        </PagesContainer>
        <PagesWrapper>
          <PagesDescription>Select a exchange to read more</PagesDescription>
        </PagesWrapper>
      </>
    )
  );
};

export default MarketsPage;
