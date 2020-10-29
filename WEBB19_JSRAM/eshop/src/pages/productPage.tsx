import React, { FC, useEffect, useState } from "react";
import { Product, ProductList } from "components";
import firebase from "firebaseConfig";
import styled from "styled-components";

const ProductsSection = styled.div`
  min-height: 100vh;
  background: black;
  padding: 2rem 2rem;
`;

export const ProductsTitle = styled.h1`
  font-size: 2rem;
  color: white;
  margin-bottom: 2rem;
  text-transform: uppercase;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProductPage: FC = () => {
  const [products, setProducts] = useState<Array<Object>>([]);
  const productRef = firebase.database().ref("/products");

  useEffect(() => {
    productRef.once("value", (snapshot) => {
      setProducts(Object.entries(snapshot.val()));
    });
  }, []);

  return (
    <ProductsSection>
      <ProductsTitle>Products</ProductsTitle>
      <ProductList>
        {products &&
          products.map((product: any) => {
            return <Product key={product[0]} product={product[1]} />;
          })}
      </ProductList>
    </ProductsSection>
  );
};

export default ProductPage;
