import React, { Component } from 'react';

class Suggestion extends Component {
  render() {
    return (
      <div className="suggestion-dropdown">
        <button className="suggestion">Founder</button>      
        <button className="suggestion">Investor</button>
        <button className="suggestion">Engineer</button>
        <button className="suggestion">Developer</button>
        <button className="suggestion">Sales</button>
      </div>
    );
  }
}

export default Suggestion;