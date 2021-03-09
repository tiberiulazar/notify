import React from "react";

import "./categories-list.styles.scss";

import { ReactComponent as AddIcon } from "../../assets/add_note.svg";

import CategoryItem from "../category-item/category-item.component";

const CategoriesList = ({ categories }) => {
  return (
    <div className="categories">
      <div className="categories__action">
        <AddIcon className="categories__add-icon" />
        Add category
      </div>

      {categories.map((category) => (
        <CategoryItem
          id={category.id}
          categoryName={category.title}
          categoryColor={category.color}
        />
      ))}
    </div>
  );
};

export default CategoriesList;
