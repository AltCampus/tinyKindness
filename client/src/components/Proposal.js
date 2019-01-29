import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import postHelperDetails, { loginUser, getAllIntroctionTags, getFeedbackTags, getResourcesTags, findIntroTags, findResourcesTags, findFeedbackTags } from '../store/actions/actionCreator';
import Suggestion from './Suggestion';
import Tags from './Tags';


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
    this.props.dispatch(findIntroTags(e.target.value))
    this.setState({
      introduction: e.target.value
    })
  }

  handleResources = (e) => {
    this.props.dispatch(findResourcesTags(e.target.value))
    this.setState({
      resources: e.target.value
    })
  }

  handleFeedback = (e) => {
    this.props.dispatch(findFeedbackTags(e.target.value))
    this.setState({
      feedback: e.target.value
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
    this.props.dispatch(getResourcesTags())
    this.props.dispatch(getFeedbackTags())
  }
  
  render() {
    // if(!this.props.userLogin.userName) return <Redirect to='/' />
    return (
      <div className="proposal center">
        <form className="wrapper proposal-form animated bounceIn" onSubmit={this.handleSubmit}>
          <h2 className="proposal-head">Add Your Details</h2>
          <div className="row">
            <div className="proposal-field">
              <label htmlFor="bio">Your Bio</label>
              <input className="proposal-input" id="first_name" type="text"  name="bio" onChange={this.handleChange} />
            </div>
            <div className="proposal-field">
              <label htmlFor="first_name">INTRODUCTIONS: What type of people you know professionally?</label>
              <input className="proposal-input" id="first_name" type="text"  name="introduction" onChange={this.handleIntroduction} />
              {/* <Suggestion /> */}
              <Tags />
            </div>
            <div className="proposal-field ">
              <label htmlFor="first_name">FEEDBACK: What are you so good?</label>
              <input className="proposal-input" id="first_name" type="text"  name="feedback" onChange={this.handleFeedback} />
            </div>
            <div className="proposal-field ">
              <label htmlFor="first_name">RESOURCES: What areas do you spend most of your time reading, researching, thinking? </label>
              <input className="proposal-input" id="first_name" type="text" name="resources" onChange={this.handleResources} />
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