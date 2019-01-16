import React, { Component } from 'react';
import {Link} from 'react-router-dom'

document.addEventListener('DOMContentLoaded', function() {
  const elms = document.querySelectorAll('.dropdown-trigger');
  const instances = M.Dropdown.init(elms);
});

class SignInLink extends Component {
  dropDown = e => {
    const instance =  M.Dropdown.getInstance(e.target);
    instance.open();
  } 

  render() {
    return (
      <div className="auth-links">
        <a className='dropdown-trigger btn drop-btn' href='#' data-target='dropdown1' onClick={this.dropDown}>Praveen <i className="fas fa-sort-down"></i></a>
        <ul id='dropdown1' className='dropdown-content'>
          <li><Link to="/">Profile</Link></li>
          <li><a href="#!">Logout</a></li>
        </ul>
      </div>
    );
  }
}

export default SignInLink;