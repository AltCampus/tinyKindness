import React, { Component } from "react";
import {connect} from 'react-redux';
import authActions from "../store/actions/authActions";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    // get data for profile
    const token = localStorage.getItem('token');
    const { username } = this.props.match.params;

    this.props.dispatch(authActions.getUserData({token, username}, (userStatus) => {
      if (userStatus) {
        this.setState({
          isLoading: false
        });
      }
    }))
  }

  render() {
    const {user} = this.props;
    
    return (
      <main className="profile">
        <div className="profile-wrapper wrapper">
          <button className="btn edit-btn">
            <i class="fas fa-pencil-alt" />
          </button>
          <div className="user-info">
            <h3 className="user-name">{user.name}</h3>
            <a href={'https://twitter.com/' + user.username} target="_blank" className="twitter-link">{user.username}
            </a>
            <p className="user-bio">{user.bio}</p>
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


const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile);
