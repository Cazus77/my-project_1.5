import React from "react";
import { useProduct } from "../hook/ProductProvider";
import ProductItem from "../ProductItem/ProductItem";
import TotalCost from "../TotalCost/TotalCost";
import SortInput from "../SortInput/SortInput";

export default function ProductSortTimeInterval() {
  const {
    productsDataSort,
    inputFrom,
    inputUntil,
    setInputFrom,
    setInputUntil,
  } = useProduct();

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th className="cell">Продукты</th>
            <th className="cell">Категория</th>
            <th className="cell">Цена</th>
          </tr>
        </thead>
        <tbody>
          {productsDataSort.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2" className="cell">
              Общая стоимость
            </td>
            <td className="cell">
              <TotalCost productsDay={productsDataSort} />
            </td>
          </tr>
        </tfoot>
      </table>
      <SortInput
        inputFrom={inputFrom}
        setInputFrom={setInputFrom}
        inputUntil={inputUntil}
        setInputUntil={setInputUntil}
      />
    </>
  );
}
