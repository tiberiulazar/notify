export const addNoteToList = (categories, newNote) => {
  // find category
  const currentCategory = categories.find(
    (category) => category.title === newNote.category
  );
};
