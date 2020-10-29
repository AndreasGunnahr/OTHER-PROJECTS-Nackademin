import React, { useContext, useState } from "react";
import styled from "styled-components";
import { CartContext } from "provider/cartProvider";
import { CartItem } from "components";

const CartContainer = styled.div`
  max-width: 950px;
  margin: 0 auto;
  background: black;
  padding: 2rem 2rem;
`;

const CartTitle = styled.h1`
  font-size: 2rem;
  color: white;
  margin-bottom: 2rem;
  text-transform: uppercase;
  max-width: 1200px;
  margin: 0 auto;
`;

const CartList = styled.div`
  background: white;
  height: 100%;
  border-radius: 10px;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 1rem;
`;

const CartTotalPrice = styled.h1`
  font-size: 2rem;
  color: black;
  margin-top: 2rem;
`;

const CartPage = () => {
  const { cart }: any = useContext(CartContext);
  return (
    <CartContainer>
      <CartTitle>Cart</CartTitle>
      <CartList>
        {cart.items.map((item: any, index: number) => {
          return <CartItem key={index} item={item} />;
        })}
        <CartTotalPrice>
          Total price: {cart.items.length > 0 ? cart.totalPrice : 0} kr
        </CartTotalPrice>
      </CartList>
    </CartContainer>
  );
};

export default CartPage;
