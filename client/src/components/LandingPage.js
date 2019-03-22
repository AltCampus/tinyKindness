import React, { Component } from "react";
import About from "./About";
import authActions from "../store/actions/authActions";
import { connect } from "react-redux";

class LandingPage extends Component {
  state = {
    isMore: false
  };

  handleMore = () => {
    this.setState({
      isMore: !this.state.isMore
    });
  };

  componentDidMount() {
    const token = localStorage.getItem('token');
    if(token) {
      console.log(token, 'in landing page')
      this.getUserData({token});
    } else {
      if(location.href.length > 22) {
        const token = location.href.match(/\?t=(.*)/)[1];
        localStorage.setItem('token', token);
        this.getUserData({token})
      }
    }
  }

  getUserData(dataCreds) {
    this.props.dispatch(authActions.getUserData(dataCreds, (userStatus) => {
      if(userStatus) {
        this.props.history.push('/user/kind')
      }
    }))
}

  render() {

    
    return (
      <main className="landing">
        <div className="landing-sections wrapper">
          <div className="landing-descriptions">
            <h2 className="description-head landing-head">
              Pay it forward by helping someone in 5 minutes or less.
            </h2>
            <p className="description-more">
              Do you feel the world has given you a lot? Have you benefited from
              someone else's generosity - their advice, guidance, connections,
              or inspiration.
            </p>
            <p className="description-more">
              Let's pay it back by helping others.
            </p>
            <div className="description-more">
              <button className="btn btn-more" onClick={this.handleMore}>
                Know More
              </button>
            </div>
          </div>
          <div className="landing-descriptions">
            <h3 className="links-head landing-head">Getting Started</h3>
            <a
              className="btn
            twitter-login"
              href="http://localhost:8001/api/v1/auth/twitter"
            >
              <i className="fab fa-twitter" /> Signup with Twitter
            </a>
            <p className="seperator"> OR </p>
            <h3 className="links-head landing-head">Already have account?</h3>
            <a
              className="btn clas
            twitter-login"
              href="http://localhost:8001/api/v1/auth/twitter">
              <i className="fab fa-twitter" /> Login with Twitter
            </a>
          </div>
        </div>
        <About isMore={this.state.isMore} handleMore={this.handleMore} />
      </main>
    );
  }
}

export default connect()(LandingPage);