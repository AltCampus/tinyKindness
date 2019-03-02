import React, { Component, lazy, Suspense } from "react";
import "./scss/app.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";

const KindnessForm = lazy(() => import("./components/KindnessForm"));
const Profile = lazy(() => import("./components/Profile"));
const HelperList = lazy(() => import("./components/HelperList"));
const LandingPage = lazy(() => import("./components/LandingPage"));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Suspense fallback={'Loading...'}>
              <Route path="/" exact component={LandingPage} />
              <Route path="/user/kind" exact component={KindnessForm} />
              <Route path="/users/:username" component={Profile} />
              <Route path="/users" exact component={HelperList} />
            </Suspense>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
