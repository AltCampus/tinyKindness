import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import postHelperDetails, { loginUser, getAllIntroctionTags } from '../store/actions/actionCreator';

class Proposal extends Component {
  state = {
    name: '',
    bio: '',
    introduction: '',
    feedback: '',
    resources: '',
    twitterHandle: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleIntroduction = (e) => {
    this.setState({
      introduction: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(postHelperDetails(this.state))
    document.querySelectorAll("#first_name").value = '';
    // this.props.history.push('/need')
  }
  componentWillMount = () => {
    const jwt = localStorage.getItem("jwt")
    this.props.dispatch(loginUser(jwt))
    this.props.dispatch(getAllIntroctionTags())
  }
  
  render() {
    if(!this.props.userLogin.userName) return <Redirect to='/' />
    return (
      <div className="proposal center">
        <form className="wrapper proposal-form animated bounceIn" onSubmit={this.handleSubmit}>
          <h2 className="proposal-head">Add Your Details</h2>
          <div className="row">
            <div className="proposal-field">
              <label htmlFor="first_name">Your name</label>
              <input className="proposal-input" id="first_name" type="text"  name="name" onChange={this.handleChange} />
            </div>
            <div className="proposal-field">
              <label htmlFor="bio">Your Bio</label>
              <input className="proposal-input" id="first_name" type="text"  name="bio" onChange={this.handleChange} />
            </div>
            <div className="proposal-field">
              <label htmlFor="first_name">INTRODUCTIONS: What type of people you know professionally?</label>
              <input className="proposal-input" id="first_name" type="text"  name="introduction" onChange={this.handleIntroduction} />
            </div>
            <div className="proposal-field ">
              <label htmlFor="first_name">FEEDBACK: What are you so good?</label>
              <input className="proposal-input" id="first_name" type="text"  name="feedback" onChange={this.handleFeedback} />
            </div>
            <div className="proposal-field ">
              <label htmlFor="first_name">RESOURCES: What areas do you spend most of your time reading, researching, thinking? </label>
              <input className="proposal-input" id="first_name" type="text" name="resources" onChange={this.handleResources} />
            </div>
            <div className="proposal-field">
              <label htmlFor="first_name">TWITTER HANDLE</label>
              <input className="proposal-input" id="first_name" type="text"  name="twitterHandle" onChange={this.handleChange} />
            </div>
          </div>
          <button type="submit" onSubmit={this.handleSubmit} className="btn ">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      userLogin: state.loginUser
  }
}

export default connect(mapStateToProps)(Proposal);