import React from "react";
import "./ProductItem.sass";
import edit from "./edit.svg";
import save from "./save.svg";
import { useProduct } from "../hook/ProductProvider";
import ProductRemove from "../ProductRemove/ProductRemove";

function ProductItem({ product }) {
  const { toggleMode, editProd } = useProduct();

  return (
    <>
      <tr className="row" key={product.id}>
        <td className="cell">
          {!product.isEdit ? (
            <input
              className="product__item"
              value={product.product}
              onChange={(event) => editProd(product.id, "product", event)}
            />
          ) : (
            <span>{product.product}</span>
          )}
        </td>
        <td className="cell">
          {!product.isEdit ? (
            <input
              className="product__item"
              value={product.category}
              onChange={(event) => editProd(product.id, "category", event)}
            />
          ) : (
            <span>{product.category}</span>
          )}
        </td>
        <td className="cell">
          {!product.isEdit ? (
            <input
              className="product__item"
              value={product.cost}
              onChange={(event) => editProd(product.id, "cost", event)}
            />
          ) : (
            <span>{product.cost}</span>
          )}
        </td>
        <td className="button table__button">
          <button onClick={(event) => toggleMode(product.id)}>
            {product.isEdit ? (
              <img src={edit} alt="edit" />
            ) : (
              <img src={save} alt="save" />
            )}
          </button>
        </td>
        <>
          <ProductRemove className="button" id={product.id} product={product} />
        </>
      </tr>
    </>
  );
}

export default ProductItem;
