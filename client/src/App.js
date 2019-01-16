import React, { Component, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './scss/app.scss';
import Header from './components/Header';

const Proposal = lazy(() => import('./components/Proposal'));
const LandingPage = lazy(() => import('./components/LandingPage'));
const HelperList = lazy(() => import('./components/HelperList'));
const Profile = lazy(() => import('./components/Profile'));
import Loader from './components/Loader';
import { loginUser, getHelperDetails } from './store/actions/actionCreator';

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
  componentWillMount = () => {
    const jwt = localStorage.getItem("jwt")
    // this.props.dispatch(loginUser(jwt))
    this.props.dispatch(getHelperDetails((succeed) => {succeed ? console.log(true) : ""}))
  }


  render() {
    console.log(this.props)
    return (
      <BrowserRouter>
        <div>
        <Header jwt={this.jwt} />
          <Switch>
             <Suspense fallback={<Loader />}>
              <Route path='/' exact render={(props) => {
                if(props.location.search) {
                  this.jwt = props.location.search.slice(7)
                }
                return <LandingPage/>
              }} />
              <Route path='/help' component={Proposal} />
              <Route path='/need' component={HelperList} />
              <Route path='/:username' component={Profile} />
             </Suspense>
          </Switch>               
        </div>
      </BrowserRouter>
    );
  }
}


export default connect()(App);