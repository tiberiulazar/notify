import NotesTypes from "./notes.types";

export const addNote = (newNote) => ({
  type: NotesTypes.ADD_NOTE,
  payload: newNote,
});
