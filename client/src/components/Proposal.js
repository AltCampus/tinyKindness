import React, { Component } from 'react';
import { connect } from 'react-redux';
import postHelperDetails from '../store/actions/actionCreator';
import HelperList from './HelperList';

class Proposal extends Component {
  state = {
    name: '',
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
  }
  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <input id="first_name" type="text" className="validate" name="name" onChange={this.handleChange} />
              <label htmlFor="first_name">Your name</label>
            </div>
            <div className="input-field col s6">
              <input id="first_name" type="text" className="validate" name="introduction" onChange={this.handleChange} />
              <label htmlFor="first_name">INTRODUCTIONS: What type of people you know professionally?</label>
            </div>
            <div className="input-field col s6">
              <input id="first_name" type="text" className="validate" name="feedback" onChange={this.handleChange} />
              <label htmlFor="first_name">FEEDBACK: What are you so good at that you can give decent feedback on within a few minutes?</label>
            </div>
            <div className="input-field col s6">
              <input id="first_name" type="text" className="validate" name="resources" onChange={this.handleChange} />
              <label htmlFor="first_name">RESOURCES: What areas do you spend most of your time reading, researching, thinking such that if someone has a specific question, you can point them to a good Internet resource? </label>
            </div>
            <div className="input-field col s6">
              <input id="first_name" type="text" className="validate" name="twitterHandle" onChange={this.handleChange} />
              <label htmlFor="first_name">TWITTER HANDLE</label>
            </div>
          </div>
          <button type="submit" onSubmit={this.handleSubmit}>Submit</button>
        </form>
        <HelperList />
      </div>
    );
  }
}

export default connect()(Proposal);