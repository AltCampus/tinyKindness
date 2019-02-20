import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="wrapper header-wrapper">
          <Link to="/" className="logo">
            tinyKindness
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;
