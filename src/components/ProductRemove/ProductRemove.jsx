import React from "react";
import delit from "./delit.svg";

import { useProduct } from "../hook/ProductProvider";

export default function ProductRemove({ product }) {
  const { removeItem } = useProduct();

  return (
    <td className="button table__button">
      <button onClick={() => removeItem(product.id)}>
        <img src={delit} alt="delite" />
      </button>
    </td>
  );
}
