import { createSelector } from "reselect";

export const selectCategoriesList = (state) => {
  return state.categoriesList;
};

export const selectCategories = createSelector(
  [selectCategoriesList],
  (list) => list.categories
);
