import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './scss/app.scss';
import Header from './components/Header';

class App extends Component {

  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
        </React.Fragment>
      </Router>
    );
  }
}


export default (App);