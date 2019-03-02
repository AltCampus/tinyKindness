import React, { Component } from "react";

class Tags extends Component {
  deleteTag = () => {
    this.setSate({
    
    })
  }

  render() {
    return (
      <span className="tags">
        <span className="tag">
          <span className="tag-head">{this.props.tag.name}</span>
          <button onClick={this.deleteTag}className="tag-remove">x</button>
        </span>
      </span>
    );
  }
}

export default Tags;
