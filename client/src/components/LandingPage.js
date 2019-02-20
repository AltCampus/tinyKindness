import React, { Component } from "react";
import About from "./About";

export default class LandingPage extends Component {
  state = {
    isMore: false
  };
  handleMore = () => {
    this.setState({
      isMore: !this.state.isMore
    });
  };
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
              className="btn clas
            twitter-login"
              href="http://localhost:8001/auth/twitter"
            >
              <i className="fab fa-twitter" /> Signup with Twitter
            </a>
            <p className="seperator"> OR </p>
            <h3 className="links-head landing-head">Already have account?</h3>
            <a
              className="btn clas
            twitter-login"
              href="http://localhost:8001/auth/twitter"
            >
              <i className="fab fa-twitter" /> Login with Twitter
            </a>
          </div>
        </div>
        <About isMore={this.state.isMore} handleMore={this.handleMore} />
      </main>
    );
  }
}
