import React, { createContext, useContext, useState } from "react";
import productFullData from "../../data/products-data.json";
import * as calendar from "../hook/calendar";
import { nanoid } from "nanoid";

function id() {
  return nanoid();
}

const ProductDataContext = createContext();

export const useProduct = () => useContext(ProductDataContext);

const ProductProvider = ({ children }) => {
  const [currentData] = useState(calendar.getData());

  const [products, setProducts] = useState(productFullData);
  const [state, setState] = useState();

  const [inputFrom, setInputFrom] = useState();
  const [inputUntil, setInputUntil] = useState();

  //////////////////////Получение покупок за текущюю дату ////////////////////////////////////////////////////////////////

  const productsData = products.reduce((productArr, product) => {
    if (product.data === currentData) {
      productArr = product.fields;
    }
    return productArr;
  }, []);

  const [productsDay, setProductsDay] = useState(productsData);

  const changeHandler = () => {
    setProductsDay(productsData);
  };
  /////////////////////////// Удаление покупок ///////////////////////////////////////////////////////////////
  const removeProduct = (id) => {
    setProductsDay(productsDay.filter((product) => product.id !== id));
  };

  const removeItem = (id) => {
    removeProduct(id);
  };
  /////////////////////////////Редактирование покупок ///////////////////////////////////////////////////////////////////
  const toggleMode = (id) => {
    setProductsDay(
      productsDay.map((prod) => {
        if (prod.id === id) {
          prod.isEdit = !prod.isEdit;
        }
        return prod;
      })
    );
  };

  const editProd = (id, field, event) => {
    console.log(field);
    setProductsDay(
      productsDay.map((prod) => {
        if (prod.id === id) {
          prod[field] = event.target.value;
        }
        return prod;
      })
    );
  };

  //////////////////////////// Добавление расходов///////////////////////////////////////////////////////////////////

  const [categoryValue, setCategoryValue] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const addProducts = (product, category, cost) => {
    let obj = {
      id: id(),
      product,
      category,
      cost,
      isEdit: "false",
    };
    setProductsDay([...productsDay, obj]);
  };

  const categoryValues = products.reduce((productArr, product) => {
    productArr.push(...product.fields);
    return productArr;
  }, []);

  const categoryNames = categoryValues.reduce((categoryArr, category) => {
    categoryArr.push(category.category);
    return [...new Set(categoryArr)];
  }, []);

  const itemCell = (event) => {
    event.preventDefault();
    setCategoryValue(event.target.textContent);
    setIsOpen(!isOpen);
  };
  const [categoryName, setCategoryName] = useState(categoryNames);
  const categoryFilter = categoryName.filter((elem) => {
    return elem.toLowerCase().includes(categoryValue.toLowerCase());
  });

  const categoryList =
    categoryValue && isOpen
      ? categoryFilter.map((item, index) => {
          return (
            <li key={index} onClick={itemCell}>
              {item}
            </li>
          );
        })
      : null;

  ////////////////////////////// Сортировка покупок по дате ////////////////////////////////////////////////////////////////////

  const productsDataSort = products.reduce((productArr, product) => {
    if (product.data >= inputFrom && product.data <= inputUntil) {
      productArr.push(...product.fields);
    }
    return productArr;
  }, []);

  ///////////////////////// Вывод графиков ///////////////////////////////////////////////

  const productDataCanvas = productsDataSort.reduce((acc, product) => {
    const { category, cost } = product;

    if (!acc[category]) {
      acc[category] = 0;
    }
    acc[category] += cost;
    return acc;
  }, {});

  //////////////////////////////////////////////////////////////////////

  return (
    <ProductDataContext.Provider
      value={{
        currentData,
        products,
        setProducts,
        state,
        setState,
        inputFrom,
        setInputFrom,
        inputUntil,
        setInputUntil,
        productDataCanvas,
        productsDataSort,
        productsDay,
        categoryName,
        setCategoryName,
        categoryValue,
        setCategoryValue,
        categoryList,
        isOpen,
        setIsOpen,
        addProducts,
        removeItem,
        changeHandler,
        toggleMode,
        editProd,
      }}
    >
      {children}
    </ProductDataContext.Provider>
  );
};

export default ProductProvider;
