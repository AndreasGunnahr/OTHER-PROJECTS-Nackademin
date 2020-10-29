import React, { useState, useEffect, useContext } from "react";
import firebase from "firebaseConfig";
import { Product } from "components";
import styled from "styled-components";
import { ReviewsList, Picker } from "components";
import { CartContext } from "provider/cartProvider";

const ProductContainer = styled.div`
  max-width: 950px;
  margin: 0 auto;
  background: black;
  padding: 2rem 2rem;
`;

const AddToCartBtn = styled.a`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  background: orange;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 10px;
  margin-top: 1rem;
`;

const AddToCartWrapper = styled.div`
  display: flex;
`;

const ProductDetailPage = ({ match }: any) => {
  const { cart, setCart }: any = useContext(CartContext);

  const id = match.params.id;
  const [product, setProduct] = useState<any>(null);
  const [nrOfProducts, setNrOfProducts] = useState(1);
  const productRef = firebase.database().ref(`/products/${id}`);

  useEffect(() => {
    productRef.once("value", (snapshot) => {
      setProduct(snapshot.val());
    });
  }, []);

  const handleOnAdd = () => {
    if (cart.items.some((item: any) => item.product.id === product.id)) {
      return;
    } else {
      setCart({
        totalPrice: cart.totalPrice + product.price * nrOfProducts,
        items: [
          ...cart.items,
          {
            nrOfProducts,
            product,
          },
        ],
      });
    }
    setNrOfProducts(1);
  };

  return (
    <ProductContainer>
      {product && (
        <>
          <Product product={product} />
          <AddToCartWrapper>
            <Picker
              nrOfProducts={nrOfProducts}
              setNrOfProducts={setNrOfProducts}
            />
            <AddToCartBtn onClick={handleOnAdd}>Add to cart</AddToCartBtn>
          </AddToCartWrapper>
          <ReviewsList reviewId={id} />
        </>
      )}
    </ProductContainer>
  );
};

export default ProductDetailPage;
