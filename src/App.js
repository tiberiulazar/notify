import "./App.scss";
import { Switch, Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
// Router imports

import Header from "./components/header/header.component";
import Dashboard from "./pages/dashboard/dashboard.component";
import AuthPage from "./pages/auth-page/auth-page.component";
import React from "react";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      console.log("userauth", userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header user={this.props.currentUser} />
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/dashboard" />
              ) : (
                <Redirect to="/authentification" />
              )
            }
          />
          <Route
            exact
            path="/authentification"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/dashboard" />
              ) : (
                <AuthPage />
              )
            }
          />
          <Route
            exact
            path="/dashboard"
            render={() =>
              this.props.currentUser ? (
                <Dashboard />
              ) : (
                <Redirect to="/authentification" />
              )
            }
          />
        </Switch>
        {/* <Dashboard /> */}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
