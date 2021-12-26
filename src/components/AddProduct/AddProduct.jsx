import React from "react";
import { useProduct } from "../hook/ProductProvider";
import { useInput } from "../hook/useInput";
import "./AddProduct.sass";

export default function AddProduct() {
  const {
    addProducts,
    categoryValue,
    setCategoryValue,
    categoryList,
    isOpen,
    setIsOpen,
    categoryName,
    setCategoryName,
  } = useProduct();

  const [productValue, setProductValue] = useInput("");
  const [costValue, setCostValue] = useInput("");

  const submit = (event) => {
    event.preventDefault();
    addProducts(productValue.value, categoryValue, costValue.value);
    setCategoryName([...categoryName, categoryValue]);
    setProductValue();
    setCategoryValue("");
    setCostValue();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <form onSubmit={submit} className="add__product">
        <input
          className="product__item"
          {...productValue}
          placeholder="название продукта"
        />
        <input
          className="product__item"
          name={"category"}
          value={categoryValue}
          onChange={(event) => setCategoryValue(event.target.value)}
          placeholder="категория"
        />
        <input className="product__item" {...costValue} placeholder="цена" />
        <button className="add__product__button">Добавить</button>
      </form>
      <ul>{categoryList}</ul>
    </>
  );
}
