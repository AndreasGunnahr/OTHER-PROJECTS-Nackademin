import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const CartItemWrapper = styled.div`
  display: flex;
`;

export const CartItemName = styled.h1`
  font-size: 1.5rem;
  color: black;
`;

export const CartItemPrice = styled.p`
  margin-top: 0.5rem;
  font-size: 1.25rem;
  color: black;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-left: 2rem;
  margin-top: 2rem;
`;

export const CartImage = styled.img`
  height: 150px;
  width: 150px;
  object-fit: cover;
  border-radius: 10px;
`;
