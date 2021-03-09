import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCategories } from "../../redux/categories/categories.selectors";

import "./dashboard.styles.scss";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import CategoriesList from "../../components/categories-list/categories-list.component";
import NotesContainer from "../../components/notes-container/notes-container.component";
import AddNotePage from "../add-note/add-note.component";

const Dashboard = ({ categories, match }) => {
  console.log(match);
  return (
    <div className="dashboard">
      <CategoriesList categories={categories} />
      <Switch>
        <Route exact path={`${match.path}/`} component={NotesContainer} />
        <Route exact path={`${match.path}/addNote`} component={AddNotePage} />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectCategories,
});

export default withRouter(connect(mapStateToProps)(Dashboard));
