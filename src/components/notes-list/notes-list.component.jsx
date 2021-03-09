import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectNotes } from "../../redux/notes/notes.selectors";

import "./notes-list.styles.scss";

import Note from "../note/note.component";

const NotesList = ({ notes }) => {
  return (
    <div className="notes-list">
      <Note addNote />

      {notes.map(({ id, title, date, description }) => (
        <Note key={id} title={title} description={description} date={date} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  notes: selectNotes,
});

export default connect(mapStateToProps)(NotesList);
