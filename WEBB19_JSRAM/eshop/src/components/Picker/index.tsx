import React, { FC } from "react";
import { PickerContainer, PickerBtn, PickerValue } from "./style";

const Picker: FC<any> = ({ nrOfProducts, setNrOfProducts }) => {
  const handleOnAdd = () => {
    if (nrOfProducts < 10) {
      setNrOfProducts(nrOfProducts + 1);
    }
  };

  const handleOnMinus = () => {
    if (nrOfProducts > 1) {
      setNrOfProducts(nrOfProducts - 1);
    }
  };

  return (
    <PickerContainer>
      <PickerBtn onClick={handleOnMinus}>-</PickerBtn>
      <PickerValue>{nrOfProducts}</PickerValue>
      <PickerBtn onClick={handleOnAdd}>+</PickerBtn>
    </PickerContainer>
  );
};

export default Picker;
