import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { logoutUser } from '../store/actions/actionCreator';



document.addEventListener('DOMContentLoaded', function() {
  const elms = document.querySelectorAll('.dropdown-trigger');
  const instances = M.Dropdown.init(elms);
});

class SignInLink extends Component {
  dropDown = e => {
    const instance =  M.Dropdown.getInstance(e.target);
    if(instance) {
      instance.open();
    }
  } 

  handleLogout = e => {
    localStorage.removeItem('jwt');
    this.props.dispatch(logoutUser())
  }

  render() {
    const { loginUser } = this.props;
    return (
      <div className="auth-links">
        <a className='dropdown-trigger btn drop-btn' href='#' data-target='dropdown1' onClick={this.dropDown}>Praveen <i className="fas fa-sort-down"></i></a>
        <ul id='dropdown1' className='dropdown-content'>
          <li><Link to={`/users/@${loginUser.userName}`}>Profile</Link></li>
          <li><Link to="/need">List</Link></li>
          <li><button onClick={this.handleLogout}>Logout</button></li>
        </ul>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    loginUser: state.loginUser
  }
}
export default connect(mapStateToProps)(SignInLink);