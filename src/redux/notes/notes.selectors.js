import { createSelector } from "reselect";

export const selectNotesList = (state) => {
  return state.notesList;
};

export const selectNotes = createSelector([selectNotesList], (list) => {
  return list.notes;
});
