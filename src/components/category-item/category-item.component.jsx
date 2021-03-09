import React from "react";

import "./category-item.styles.scss";

const CategoryItem = ({ categoryName, categoryColor }) => {
  return (
    <div className="category-item">
      <span
        className={`category-item__color ${
          categoryColor ? `category-item__color--${categoryColor}` : ""
        }`}
      ></span>
      <span className="category-item__title">{categoryName}</span>
    </div>
  );
};

export default CategoryItem;
