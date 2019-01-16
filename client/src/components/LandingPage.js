import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import About from './About';
import { loginUser } from '../store/actions/actionCreator';

class LandingPage extends Component {
  state = {
    isMore: false
  }
  handleMore = () => {
    this.setState({
      isMore: !this.state.isMore
    })
  }
  render() {
    if(localStorage.getItem("jwt")) {
      return <Redirect to='/help'/>
    } else {

      return (
        <main className="landing">
          <div className="landing-sections wrapper">
            <div className="landing-descriptions">
              <h2 className="description-head landing-head">
              Pay it forward by helping someone in 5 minutes or less.
              </h2>
              <p className="description-more">
              Do you feel the world has given you a lot? Have you benefited from someone else's generosity - their advice, guidance, connections, or inspiration.
              </p>
              <p className="description-more">Let's  pay it back by helping others.</p>
              <div className="description-more">
                <button className="btn btn-more" onClick={this.handleMore}>Know More</button>
              </div>
            </div>
            <div className="landing-descriptions">
              <h3 className="links-head landing-head">Interested in Helping Others</h3>
              <a className="btn clas
              twitter-login" href='http://localhost:8001/auth/twitter'><i className="fab fa-twitter"></i> Login with Twitter</a>
              <p className="seperator"> OR </p>
              <h3 className="links-head landing-head">Interested in Finding Help</h3>
              <Link to='/need' className="btn"> Click Here</Link>
            </div>
          </div>
          <About isMore={this.state.isMore} handleMore={this.handleMore}/>
        </main>
      );
    }
  }
}

export default connect()(LandingPage);
