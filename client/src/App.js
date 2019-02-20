import React, { Component, lazy, Suspense } from "react";
import LandingPage from "./components/LandingPage";
import "./scss/app.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import KindnessForm from "./components/KindnessForm";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/user/kind" exact component={KindnessForm} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
