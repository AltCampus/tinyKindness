import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <main className="profile">
        <div className="profile-wrapper wrapper">
          <button className="btn edit-btn">
            <i class="fas fa-pencil-alt" />
          </button>
          <div className="user-info">
            <h3 className="user-name">Ashwani Goswami</h3>
            <a href="twitter-link" className="twitter-link">
              @blah
            </a>
            <p className="user-bio">blah</p>
          </div>
          <div className="user-details">
            <div className="user-mini-section">
              <h4 className="user-mini-head">Strong Areas</h4>
              <p className="user-detail">blah blah blah</p>
            </div>
            <div className="user-mini-section">
              <h4 className="user-mini-head">People You Know</h4>
              <p className="user-detail">blah blah</p>
            </div>
            <div className="user-mini-section">
              <h4 className="user-mini-head">Interests</h4>
              <p className="user-detail">blah blah blah</p>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Profile;
