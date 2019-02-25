import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

document.addEventListener("DOMContentLoaded", function() {
  const elms = document.querySelectorAll(".dropdown-trigger");
  const instances = M.Dropdown.init(elms);
});

class SignInLink extends Component {
  dropDown = e => {
    const instance = M.Dropdown.getInstance(e.target);
    if (instance) {
      instance.open();
    }
  };

  render() {
    return (
      <div className="auth-links">
        <a
          className="dropdown-trigger btn drop-btn"
          href="#"
          data-target="dropdown1"
          onClick={this.dropDown}
        >
          Ashwani <i className="fas fa-sort-down" />
        </a>
        <ul id="dropdown1" className="dropdown-content">
          <li>
            <Link to={`/users/@${loginUser.userName}`}>Profile</Link>
          </li>
          <li>
            <Link to="/need">List</Link>
          </li>
          <li>
            <button onClick={this.handleLogout}>Logout</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default connect()(SignInLink);
