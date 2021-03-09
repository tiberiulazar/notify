import React from "react";

import "./notes-container.styles.scss";

import NotesList from "../notes-list/notes-list.component";

const NotesContainer = () => {
  return (
    <div className="notes-container">
      <div className="notes-search">
        <input
          className="notes-search__input"
          type="text"
          name="searchValue"
          placeholder="Search for a note.."
        />
      </div>
      <NotesList />
    </div>
  );
};

export default NotesContainer;
