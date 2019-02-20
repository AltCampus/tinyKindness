import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getIntroductionTag,
  getFeedbackTags,
  getResourceTags
} from "../store/actions/actionCreator";

class KindnessForm extends Component {
  state = {
    name: "",
    bio: "",
    introduction: "",
    feedback: "",
    resources: "",
    twitterHandle: ""
  };
  handleIntroductionTag = e => {
    this.setState({
      introduction: e.target.value
    });
    this.props.dispatch(getIntroductionTag(e.target.value));
  };
  handleResourcesTags = e => {
    this.setState({
      resources: e.target.value
    });
    this.props.dispatch(getResourceTags(e.target.value));
  };
  handleFeedbackTags = e => {
    this.setState({
      feedback: e.target.value
    });
    this.props.dispatch(getFeedbackTags(e.target.value));
  };
  render() {
    return (
      <div className="proposal center">
        <form className="wrapper proposal-form animated bounceIn">
          <h2 className="proposal-head">Add Your Details</h2>
          <div className="row">
            <div className="proposal-field">
              <label htmlFor="bio">Your Bio</label>
              <input
                className="proposal-input"
                id="first_name"
                type="text"
                name="bio"
              />
            </div>
            <div className="proposal-field">
              <label htmlFor="first_name">
                INTRODUCTIONS: What type of people you know professionally?
              </label>
              <input
                className="proposal-input"
                id="first_name"
                type="text"
                name="introduction"
                onChange={this.handleIntroductionTag}
              />
            </div>
            <div className="proposal-field ">
              <label htmlFor="first_name">
                FEEDBACK: What are you so good?
              </label>
              <input
                className="proposal-input"
                id="first_name"
                type="text"
                name="feedback"
                onChange={this.handleFeedbackTags}
              />
            </div>
            <div className="proposal-field ">
              <label htmlFor="first_name">
                RESOURCES: What areas do you spend most of your time reading,
                researching, thinking?{" "}
              </label>
              <input
                className="proposal-input"
                id="first_name"
                type="text"
                name="resources"
                onChange={this.handleResourcesTags}
              />
            </div>
          </div>
          <button type="submit" className="btn ">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(KindnessForm);
