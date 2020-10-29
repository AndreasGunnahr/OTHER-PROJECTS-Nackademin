import React, { FC } from "react";
import { Link } from "react-router-dom";
import {
  ProductContainer,
  ProductDescription,
  ProductImg,
  ProductTitle,
  ProductTagWrapper,
  ProductTag,
  StockTag,
} from "./style";

const Product: FC<any> = ({ product }) => {
  return (
    <ProductContainer>
      <Link to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
        <ProductImg background={product.images[0].src.large}>
          <StockTag>In stock: {product.stock}</StockTag>
        </ProductImg>
        <ProductTagWrapper>
          <ProductTag>{product.price} kr</ProductTag>
          <ProductTag>💛 {product.rating}</ProductTag>
        </ProductTagWrapper>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
      </Link>
    </ProductContainer>
  );
};

export default Product;
