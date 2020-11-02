import React from "react";
import { ListContainer, ListWrapper, ListItem, ListTitle } from "./style";

const DetailList = ({ data }) => {
  const properties = [
    "name",
    "market",
    "mtd",
    "omni_ticker",
    "price",
    "source",
    "ticker",
    "today",
    "w1",
    "y3",
    "y5",
    "ytd",
  ];
  return (
    <ListContainer>
      {properties.map((item, index) => (
        <ListWrapper key={index}>
          <ListTitle>{item}</ListTitle>
          <ListItem>{data[item]}</ListItem>
        </ListWrapper>
      ))}
    </ListContainer>
  );
};

export default DetailList;
