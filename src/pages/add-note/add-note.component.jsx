import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCategories } from "../../redux/categories/categories.selectors";

import { addNote } from "../../redux/notes/notes.actions";

import "./add-note.styles.scss";

class AddNotePage extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "",
      category: "",
      date: "",
      description: "",
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = () => {
    console.log(this.state);
    const { addNote } = this.props;
    const note = this.state;
    note.id = "muie";
    note.color = "red";
    addNote(note);

    this.props.history.push("/dashboard");
  };

  render() {
    const { categories } = this.props;

    const currentDate = new Date();
    const month = currentDate.getMonth();
    const monthString = () => {
      switch (month) {
        case 0:
          return "jan";
        case 1:
          return "feb";
        case 2:
          return "mar";
        case 3:
          return "apr";
        case 4:
          return "may";
        case 5:
          return "jun";
        case 6:
          return "jul";
        case 7:
          return "aug";
        case 8:
          return "sep";
        case 9:
          return "oct";
        case 10:
          return "nov";
        case 11:
          return "dec";
        default:
          return "jan";
      }
    };
    const today = `${currentDate.getDate()} ${monthString()} ${currentDate.getFullYear()}`;

    if (this.state.date !== today) {
      this.setState({ date: today });
    }

    return (
      <div className="add-note">
        <div className="add-note__title">
          <input
            className="add-note__title__input"
            placeholder="Your node need a title..."
            name="title"
            required
            onChange={this.handleChange}
          />
        </div>
        <div className="add-note__info">
          <div className="add-note__category">
            <select name="category" onChange={this.handleChange}>
              {categories.map((category) => (
                <option
                  key={`category-select-${category.id}`}
                  value={category.title}
                >
                  {category.title}
                </option>
              ))}
            </select>
          </div>
          <div className="add-note__date">{today}</div>
        </div>
        <textarea
          className="add-note__text"
          placeholder="note next"
          name="description"
          onChange={this.handleChange}
        ></textarea>
        <button
          type="submit"
          className="add-note__submit"
          onClick={this.handleSubmit}
        >
          Add note
        </button>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  categories: selectCategories,
});

const mapDispatchToProps = (dispatch) => ({
  addNote: (note) => dispatch(addNote(note)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNotePage);
