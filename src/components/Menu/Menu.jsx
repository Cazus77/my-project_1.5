import React from "react";
import "./Menu.sass";
import { NavLink, Route, Routes } from "react-router-dom";
import Products from "../Products/Products";
import ProductSortTimeInterval from "../ProductSortTimeInterval/ProductSortTimeInterval";
import SelectCategory from "../SelectCategory/SelectCategory";

export default function Menu() {
  return (
    <>
      <header className="container">
        <nav className="menu__list">
          <NavLink to="/" className="menu__item ">
            Расходы за сегодня
          </NavLink>
          <NavLink to="historyexpense" className="menu__item ">
            История расходов
          </NavLink>
          <NavLink to="categoryexpenses" className="menu__item ">
            Расходы по категориям
          </NavLink>
        </nav>
      </header>
      <div>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="historyexpense" element={<ProductSortTimeInterval />} />
          <Route path="categoryexpenses" element={<SelectCategory />} />
        </Routes>
      </div>
    </>
  );
}

// import React, { useState } from "react";
// import "./Menu.sass";
// import MenuItemContent from "../MenuItemContent/MenuItemContent";
// import Products from "../Products/Products";
// import ProductSortTimeInterval from "../ProductSortTimeInterval/ProductSortTimeInterval";
// import SelectCategory from "../SelectCategory/SelectCategory";
//
// export default function Menu({ onChange }) {
//   const [currentMenuItem, setCurrentMenuItem] = useState(1);
//
//   const menuData = [
//     {
//       id: 1,
//       title: "Расходы за сегодня",
//       content: <Products />,
//     },
//     {
//       id: 2,
//       title: " История расходов",
//       content: <ProductSortTimeInterval />,
//     },
//     // {
//     //   id: 3,
//     //   title: "История расходов",
//     //   content: <ExpensesDetails />,
//     // },
//     {
//       id: 4,
//       title: "Расходы по категориям",
//       content: <SelectCategory />,
//     },
//   ];
//   return (
//     <div className="container">
//       <div className="menu__list">
//         {menuData.map((item) => {
//           return (
//             <div
//               key={item.id}
//               className={
//                 "menu__item " + (currentMenuItem === item.id ? "active" : "")
//               }
//               onClick={(event) => setCurrentMenuItem(item.id)}
//             >
//               {item.title}
//             </div>
//           );
//         })}
//       </div>
//       <div className="menu__item-content">
//         <MenuItemContent
//           menuData={menuData}
//           currentMenuItem={currentMenuItem}
//         />
//       </div>
//     </div>
//   );
// }
