import styled from "styled-components";

export const ProductContainer = styled.div`
  height: 500px;
  width: 100%;
  cursor: pointer;
  margin-top: 4rem;
`;

export const ProductImg = styled.div<{ background: string }>`
  position: relative;
  height: 300px;
  width: 100%;
  background: url(${({ background }) => background}) no-repeat;
  background-size: cover;
  background-position: center;
`;

export const ProductTitle = styled.h1`
  font-size: 2rem;
  color: white;
`;

export const ProductDescription = styled.p`
  font-size: 1rem;
  color: white;
  margin-top: 1rem;
`;

export const ProductTagWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductTag = styled.p`
  background: white;
  border-radius: 50px;
  padding: 0.25rem 0.75rem;
  margin: 2rem 0;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  :nth-child(2) {
    margin-left: 1rem;
  }
`;

export const StockTag = styled(ProductTag)`
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  background: orange;
  padding: 0.5rem 1rem;
`;
