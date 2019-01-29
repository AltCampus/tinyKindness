import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import SignInLink from './SignInLink';

class Header extends Component {
  render() {
    const { loginUser } = this.props;
    // let item;
    // if(loginUser.userName) {
    //  item = <SignInLink />
    // } else {
    //   item = <div></div>
    // }
    return (
      <header>
        <div className="wrapper header-wrapper">
          <Link to="/" className="logo">tinyKindness</Link>
          {/* <SignInLink /> */}
        </div>
      </header>
    );

  }
}

const mapStateToProps = (state) => {
  return {
    loginUser: state.loginUser
  }
}

export default connect(mapStateToProps)(Header);