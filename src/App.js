import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import {withSuspense} from "./components/hoc/withSuspense"
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/login";
import { connect, Provider } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import { compose } from 'redux';
import Preloader from "./components/Preloader/Preloader";
import {withRouter} from 'react-router-dom'
import store from "./redux/redux-store";
import NotesContainer from "./components/Notes/NotesContainer";
import "./App.css";
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if(!this.props.initialize) {
      return <Preloader />
    }
    return (
        <div>
          <HeaderContainer />
          <div className="app-wrapper">
            <NavBar />
            <Switch >
              <Route exact path="/" render={() => <Redirect to="/profile"/>}/>
              <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
              <Route
                path="/profile/:userId?"
                render={withSuspense(ProfileContainer)}
              />
              <Route path="/users" render={() => <UsersContainer />} />
              <Route path="/notes" render={() => <NotesContainer />} />
              <Route path="/login" render={() => <Login />} />
              <Route path="*" render={() => <div>404 Not found</div>} />
            </Switch>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      initialize: state.app.initialize
  }
}

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}),
)(App)

const MainApp = (props) => {
  return <Provider store={store}>
    <HashRouter>
      <AppContainer />
    </HashRouter>
  </Provider>;
}


export default MainApp;