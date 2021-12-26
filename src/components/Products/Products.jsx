import React from "react";
import "./Products.sass";
import { useProduct } from "../hook/ProductProvider";
import AddProduct from "../AddProduct/AddProduct";
import ProductsTable from "../ProductsTable/ProductsTable";

export default function Products() {
  const { currentData } = useProduct();

  return (
    <>
      <h1>Расходы за: {currentData}</h1>
      <AddProduct />
      <ProductsTable />
    </>
  );
}
