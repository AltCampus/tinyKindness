import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './scss/app.scss';
import Header from './components/Header';
import Proposal from './components/Proposal';
import LandingPage from './components/LandingPage';
import HelperList from './components/HelperList';


class App extends Component {

  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Switch>
             <Route path='/' exact component={LandingPage} />
             <Route path='/help' component={Proposal} />
             <Route path='/need' component={HelperList} />
          </Switch>               
          {/* <HelperList /> */}
        </React.Fragment>
      </Router>
    );
  }
}


export default (App);