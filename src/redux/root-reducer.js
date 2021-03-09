import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import categoriesReducer from "./categories/categories.reducer";
import notesReducer from "./notes/notes.reducer";
import userReducer from "./user/user.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [""],
};

const rootReducer = combineReducers({
  categoriesList: categoriesReducer,
  notesList: notesReducer,
  user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
