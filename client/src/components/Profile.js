import React, { Component } from "react";
import {connect} from 'react-redux';
import authActions from "../store/actions/authActions";
import Tags from "./Tags";

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
    const username = location.href.slice(location.href.indexOf('@')+1)
    
    this.props.dispatch(authActions.getUserData({token, username}, (userStatus) => {
      if (userStatus) {
        this.setState({
          isLoading: false
        });
      }
    }))
  }

  displayTags = (tags) => {
    return <div>
      {
        tags.map(tag => <Tags tag={tag}/>)
      }
    </div>
  }

  render() {
    const {user} = this.props;
    const { isLoading } = this.state;

    return (
      isLoading ? <p>Loading...</p> : 
      <>  
      <main className="profile">
        <div className="profile-wrapper wrapper">
          <button className="btn edit-btn">
            <i class="fas fa-pencil-alt" />
          </button>
          <div className="user-info">
            <h3 className="user-name">{user.name}</h3>
            <a href={'https://twitter.com/' + user.username} target="_blankl" className="twitter-link">{user.username}
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
      </>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user || {}
  }
}

export default connect(mapStateToProps)(Profile);
