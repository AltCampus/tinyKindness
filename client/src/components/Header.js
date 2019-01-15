import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        Hello World
       <p><a href='/auth/twitter' >login with twitter</a></p> 
      </div>
    );
  }
}

export default Header;