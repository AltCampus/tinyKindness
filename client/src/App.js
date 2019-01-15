import React, { Component, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './scss/app.scss';
import Header from './components/Header';

const Proposal = lazy(() => import('./components/Proposal'));
const LandingPage = lazy(() => import('./components/LandingPage'));
const HelperList = lazy(() => import('./components/HelperList'));
import Loader from './components/Loader';

class App extends Component {
  constructor(props) {
    super(props);
    this.jwt = ''
  }

  componentDidMount = () => {
    if(!localStorage.getItem('jwt')) {
      localStorage.setItem('jwt', this.jwt)
    }
  }

  render() {
    console.log(this.props)
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Switch>
             <Suspense fallback={<Loader />}>
              <Route path='/' exact render={(props) => {
                if(props.location.search) {
                  this.jwt = props.location.search.slice(7)
                }
                return <LandingPage {...props} />
              }} />
              <Route path='/help' component={Proposal} />
              <Route path='/need' component={HelperList} />
             </Suspense>
          </Switch>               
        </React.Fragment>
      </Router>
    );
  }
}


export default connect()(App);