import React from "react";
import { useProduct } from "../hook/ProductProvider";
import SortInput from "../SortInput/SortInput";

export default function ExpensesDetails() {
  const {
    productsDataSort,
    inputFrom,
    inputUntil,
    setInputFrom,
    setInputUntil,
  } = useProduct();

  const costSumDetails = productsDataSort.reduce((sum, product) => {
    return +sum + +product.cost;
  }, 0);

  return (
    <>
      <SortInput
        inputFrom={inputFrom}
        setInputFrom={setInputFrom}
        inputUntil={inputUntil}
        setInputUntil={setInputUntil}
      />
      Расходы c {inputFrom} по {inputUntil} :{costSumDetails}
    </>
  );
}
