import React, { Component } from 'react';

class Tags extends Component {
  render() {
    return (
      <div className="tags">
        <div className="tag">
          <span className="tag-head">Founder</span>
          <button className="tag-remove">x</button>
        </div>
        <div className="tag">
          <span className="tag-head">Invester</span>
          <button className="tag-remove">x</button>
        </div>
        <div className="tag">
          <span className="tag-head">Engineer</span>
          <button className="tag-remove">x</button>
        </div>
        <div className="tag">
          <span className="tag-head">Developer</span>
          <button className="tag-remove">x</button>
        </div>
        <div className="tag">
          <span className="tag-head">Sales</span>
          <button className="tag-remove">x</button>
        </div>
      </div>
    );
  }
}

export default Tags;