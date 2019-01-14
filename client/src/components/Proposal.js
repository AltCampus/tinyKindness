import React, { Component } from 'react';

class Proposal extends Component {
  render() {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input id="first_name" type="text" className="validate" />
              <label htmlFor="first_name">Your name</label>
            </div>
            <div className="input-field col s6">
              <input id="first_name" type="text" className="validate" />
              <label htmlFor="first_name">INTRODUCTIONS: What type of people you know professionally?</label>
            </div>
            <div className="input-field col s6">
              <input id="first_name" type="text" className="validate" />
              <label htmlFor="first_name">FEEDBACK: What are you so good at that you can give decent feedback on within a few minutes?</label>
            </div>
            <div className="input-field col s6">
              <input id="first_name" type="text" className="validate" />
              <label htmlFor="first_name">RESOURCES: What areas do you spend most of your time reading, researching, thinking such that if someone has a specific question, you can point them to a good Internet resource? </label>
            </div>
            <div className="input-field col s6">
              <input id="first_name" type="text" className="validate" />
              <label htmlFor="first_name">TWITTER HANDLE</label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Proposal;