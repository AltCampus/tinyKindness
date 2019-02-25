import React, { Component, lazy, Suspense } from "react";
import LandingPage from "./components/LandingPage";
import "./scss/app.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import KindnessForm from "./components/KindnessForm";
import Header from "./components/Header";
import Profile from "./components/Profile";
import HelperList from "./components/HelperList";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/user/kind" exact component={KindnessForm} />
            <Route path="/user/@:username" exact component={Profile} />
            <Route path="/users" exact component={HelperList} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
