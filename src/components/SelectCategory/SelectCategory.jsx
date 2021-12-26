import React, { useState } from "react";
import { useProduct } from "../hook/ProductProvider";
import Canvas from "../Canvas/Canvas";
import SortInput from "../SortInput/SortInput";

const SelectCategory = () => {
  const { products, categoryName } = useProduct();
  const [value, setValue] = useState("");

  const catValue = function (event) {
    setValue(event.target.value);
  };

  const categoryValue = categoryName.map((category, index) => (
    <option key={index} value={category}>
      {category}
    </option>
  ));

  const productSort = products.reduce((productArr, product) => {
    if (product) {
      productArr.push(...product.fields);
    }
    return productArr;
  }, []);

  const categoryDetails = productSort.reduce((sum, product) => {
    if (product.category === value) {
      return sum + product.cost;
    }
    return sum;
  }, 0);

  return (
    <>
      <select value={value} onChange={catValue}>
        <option value="">{"Выберете категорию"}</option>
        {categoryValue}
      </select>
      <h2>
        Расход по:{value}-{categoryDetails}
      </h2>
      <div className="canvas__block">
        <Canvas value={value} categoryDetails={categoryDetails} />
      </div>

      <SortInput />
    </>
  );
};

export default SelectCategory;
