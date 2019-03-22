import React, { Component, lazy, Suspense } from "react";
import "./scss/app.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";

const KindnessForm = lazy(/* webpackChunkName: 'KindnessForm' */  () => import("./components/KindnessForm"));
const Profile = lazy( /* webpackChunkName: 'Profile' */ () => import("./components/Profile"));
const HelperList = lazy( /* webpackChunkName: 'HelperList' */ () => import("./components/HelperList"));
const LandingPage = lazy( /* webpackChunkName: 'LandingPage' */ () => import("./components/LandingPage"));


// TODO:
// 1- Make the user submission successfully.
// 2- Import Kindness form functionality to Redux.
// 3- Then Listing of all users.
// 4- Adding Filters on the Listing user functionality.

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
