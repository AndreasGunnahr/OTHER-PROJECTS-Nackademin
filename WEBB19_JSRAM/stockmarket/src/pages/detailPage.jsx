import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { APIContext } from "providers";
import { DetailList } from "components";
import { PagesContainer, PagesTitle } from "./style";

const DetailPage = (props) => {
  let searchIndex = "";
  let path = props.location.pathname.split("/")[1];
  const { market, name } = useParams();
  const { data } = useContext(APIContext);

  switch (path) {
    case "crypto":
      searchIndex = "usd";
      break;

    case "currencies":
      searchIndex = "sek";
      break;

    case "indexes":
      searchIndex = "se";
      break;
    case "markets":
      break;

    default:
      return;
  }

  return (
    <>
      <PagesTitle>{name}</PagesTitle>
      <PagesContainer
        style={{
          overflow: "hidden",
        }}
      >
        {data && (
          <DetailList
            data={
              path === "markets"
                ? data[path][market][name]
                : data[path][searchIndex][name]
            }
          />
        )}
      </PagesContainer>
    </>
  );
};

export default DetailPage;
