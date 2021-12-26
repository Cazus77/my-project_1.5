import React from "react";
import "./ProductsTable.sass";
import ProductItem from "../ProductItem/ProductItem";
import { useProduct } from "../hook/ProductProvider";
import TotalCost from "../TotalCost/TotalCost";

export default function ProductsTable() {
  const { productsDay } = useProduct();

  return (
    <>
      <table className="table">
        <thead>
          <tr className="row">
            <th className="cell">Продукты</th>
            <th className="cell">Категория</th>
            <th className="cell">Цена</th>
            <th colSpan="2" className="cell">
              Редактировать
            </th>
          </tr>
        </thead>
        <tbody>
          {productsDay.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </tbody>
        <tfoot>
          <tr className="row">
            <td colSpan="2" className="cell">
              Общая стоимость
            </td>
            <td className="cell">
              <TotalCost productsDay={productsDay} />
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}
