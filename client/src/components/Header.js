import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import SignInLink from './SignInLink';

function Header() {
  return (
    <header>
      <div className="header-wrapper wrapper">
        <Link to="/" className="logo">tinyKindness</Link>
        <SignInLink />
      </div>
    </header>
  );
}

export default Header;