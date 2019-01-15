import React, { Component } from 'react';
import { connect } from 'react-redux';
import postHelperDetails from '../store/actions/actionCreator';

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

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(postHelperDetails(this.state))
    document.querySelectorAll("#first_name").value = '';
    this.props.history.push('/need')
  }
  
  render() {
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
              <input className="proposal-input" id="first_name" type="text"  name="introduction" onChange={this.handleChange} />
            </div>
            <div className="proposal-field ">
              <label htmlFor="first_name">FEEDBACK: What are you so good?</label>
              <input className="proposal-input" id="first_name" type="text"  name="feedback" onChange={this.handleChange} />
            </div>
            <div className="proposal-field ">
              <label htmlFor="first_name">RESOURCES: What areas do you spend most of your time reading, researching, thinking? </label>
              <input className="proposal-input" id="first_name" type="text" name="resources" onChange={this.handleChange} />
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

export default connect()(Proposal);