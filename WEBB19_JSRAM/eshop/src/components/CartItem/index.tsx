import React, { FC } from "react";
import {
  CartItemContainer,
  CartItemWrapper,
  CartImage,
  TextWrapper,
  CartItemName,
  CartItemPrice,
} from "./style";
const CartItem: FC<any> = ({ item }) => {
  console.log(item);
  return (
    <CartItemContainer>
      <CartItemWrapper>
        <CartImage src={item.product.images[0].src.large} />
        <TextWrapper>
          <CartItemName>{item.product.name}</CartItemName>
          <CartItemPrice>
            {item.nrOfProducts} x {item.product.price} kr
          </CartItemPrice>
        </TextWrapper>
      </CartItemWrapper>
    </CartItemContainer>
  );
};

export default CartItem;
