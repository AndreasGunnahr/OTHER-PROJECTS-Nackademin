import React from "react";
import { useHistory } from "react-router-dom";
import { Table, Body, Row, Header, Data } from "./style";

const CryptoTable = ({ data, properties, name, url }) => {
  const history = useHistory();

  const handleRowClick = (id) => {
    if (name === "market") {
      history.push(`/markets/${url}/${id}`);
      return;
    }
    history.push(`/${name}/${id}`);
  };

  return (
    <>
      <Table>
        <Body>
          <Row>
            {properties.map((header, index) => (
              <Header key={index}>{header}</Header>
            ))}
          </Row>
          {name === "markets"
            ? data.map((item, index) => (
                <Row onClick={() => handleRowClick(item)} key={index}>
                  <Data style={{ width: "100vw" }}>{item}</Data>
                </Row>
              ))
            : data.map((item, index) => (
                <Row onClick={() => handleRowClick(item[0])} key={index}>
                  <Data>{item[1].name}</Data>
                  <Data>{item[1].market}</Data>
                  <Data>{item[1].price}</Data>
                  <Data>{item[1].source}</Data>
                  <Data>{item[1].ticker}</Data>
                  <Data>{item[1].today}</Data>
                  {item[1].mtd ? <Data>{item[1].mtd}</Data> : null}
                </Row>
              ))}
        </Body>
      </Table>
    </>
  );
};

export default CryptoTable;
