import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHelperDetails } from '../store/actions/actionCreator';


class Profile extends Component {
  state = {
    userProfile: {}
  }
  componentWillMount = () => {
    const username = this.props.loginUser.userName;
    this.props.helpers.filter(helper => {
      if(helper.twitterHandle === username) {
        this.setState({
          userProfile: helper
        })
      }
    })
  }
  render() {
    const { userProfile } = this.state;
    return (
      <main className="profile">
        <div className="profile-wrapper wrapper">
          <button className="btn edit-btn"><i class="fas fa-pencil-alt"></i></button>
          <div className="user-info">
            <h3 className="user-name">{userProfile.name}</h3>
            <a href="twitter-link" className="twitter-link">{userProfile.twitterHandle}</a>
            <p className="user-bio">{userProfile.bio}</p> 
          </div>
          <div className="user-details">
            <div className="user-mini-section">
              <h4 className="user-mini-head">Strong Areas</h4>
              <p className="user-detail">{userProfile.feedback}</p>
            </div>
            <div className="user-mini-section">
              <h4 className="user-mini-head">People You Know</h4>
              <p className="user-detail">{userProfile.introduction}</p>
            </div>
            <div className="user-mini-section">
              <h4 className="user-mini-head">Interests</h4>
              <p className="user-detail">{userProfile.resources}</p>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginUser: state.loginUser,
    helpers: state.helpers
  }
}

export default connect(mapStateToProps)(Profile);