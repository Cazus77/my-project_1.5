import React from "react";
import "./MenuItemContent.sass";

export default function MenuItemContent({ menuData, currentMenuItem }) {
  return (
    <>
      {menuData.map((item) =>
        currentMenuItem === item.id ? (
          <div key={item.id}>{item.content}</div>
        ) : (
          ""
        )
      )}
    </>
  );
}
