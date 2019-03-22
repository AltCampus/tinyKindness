import React, { Component } from "react";

// TODO:
// 1 - Complete Delete Tag Function

class Tags extends Component {
  deleteTag = () => {
    // this.setSate({
    
    // })
  }

  render() {
    // console.log(this.props.tag);
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
