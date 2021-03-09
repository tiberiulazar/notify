import NOTES_DATA from "./notes.data";

import NotesTypes from "./notes.types";

const INITIAL_STATE = {
  notes: NOTES_DATA,
};

const notesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NotesTypes.ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    default:
      return state;
  }
};

export default notesReducer;
