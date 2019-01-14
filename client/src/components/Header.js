import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="wrapper">
        <Link to="/" className="logo">tinyKindness</Link>
      </div>
    </header>
  );
}

export default Header;