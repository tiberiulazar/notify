import React from "react";

import "./note.styles.scss";

import { ReactComponent as AddNote } from "../../assets/add_note.svg";
import { withRouter } from "react-router-dom";

const Note = ({ title, description, date, addNote, history, match }) => {
  return (
    <div
      className={`${addNote ? "note--add" : ""} note`}
      onClick={() => history.push(`${match.url}/addNote`)}
    >
      {addNote ? (
        <AddNote className="note__add-icon" />
      ) : (
        <div className="note__info">
          <div className="note__title">{title}</div>

          <div className="note__description">{description}</div>
          <div className="note__date">{date}</div>
        </div>
      )}
    </div>
  );
};

export default withRouter(Note);
