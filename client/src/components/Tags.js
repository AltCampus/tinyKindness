import React, { Component } from "react";

class Tags extends Component {
  render() {
    return (
      <div className="tags">
        <div className="tag">
          <span className="tag-head">Founder</span>
          <button className="tag-remove">x</button>
        </div>
      </div>
    );
  }
}

export default Tags;
