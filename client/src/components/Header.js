import React, { Component } from "react";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props)
  }
  
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
