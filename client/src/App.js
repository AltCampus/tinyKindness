import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './scss/app.scss';
import Header from './components/Header';
import Proposal from './components/Proposal';
import LandingPage from './components/LandingPage';


class App extends Component {

  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <LandingPage />                
          {/* <Proposal /> */}
        </React.Fragment>
      </Router>
    );
  }
}


export default (App);