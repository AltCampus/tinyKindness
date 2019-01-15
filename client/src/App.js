import React, { Component, lazy, Suspense } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './scss/app.scss';
import Header from './components/Header';

const Proposal = lazy(() => import('./components/Proposal'));
const LandingPage = lazy(() => import('./components/LandingPage'));
const HelperList = lazy(() => import('./components/HelperList'));
const Profile = lazy(() => import('./components/Profile'));
import Loader from './components/Loader';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Switch>
             <Suspense fallback={<Loader />}>
              <Route path='/' exact component={LandingPage} />
              <Route path='/help' component={Proposal} />
              <Route path='/need' component={HelperList} />
              <Route path='/profile' component={Profile} />
             </Suspense>
          </Switch>               
        </React.Fragment>
      </Router>
    );
  }
}


export default (App);