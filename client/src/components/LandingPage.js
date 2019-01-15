import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
  render() {
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
              <button className="btn btn-more">Know More</button>
            </div>
          </div>
          <div className="landing-descriptions">
            <h3 className="links-head landing-head">Interested in Helping Others</h3>
            <a className="btn clas
            twitter-login" href='http://192.168.1.108:8001/auth/twitter'><i className="fab fa-twitter"></i> Login with Twitter</a>
            <p className="seperator"> OR </p>
            <h3 className="links-head landing-head">Interested in Finding Help</h3>
            <Link to='/need' className="btn"> Click Here</Link>
          </div>
        </div>
      </main>
    );
  }
}

export default LandingPage;
