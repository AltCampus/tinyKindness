import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

document.addEventListener("DOMContentLoaded", function() {
	const elms = document.querySelectorAll(".dropdown-trigger");
	const instances = M.Dropdown.init(elms);
});

class SignInLink extends Component {
	dropDown = (e) => {
		const instance = M.Dropdown.getInstance(e.target);
		if (instance) {
			instance.open();
		}
	};

	render() {
		const { loginUser } = this.props;
		return loginUser ? (
			<div className='auth-links'>
				<a
					className='dropdown-trigger btn drop-btn'
					href='#'
					data-target='dropdown1'
					onClick={this.dropDown}>
					{loginUser.name.split(" ")[0]}
					<i className='fas fa-sort-down' />
				</a>
				<ul id='dropdown1' className='dropdown-content'>
					<li>
						<Link to={`/user`}>Profile</Link>
					</li>
					<li>
						<Link to='/need'>List</Link>
					</li>
					<li>
						<button onClick={this.handleLogout}>Logout</button>
					</li>
				</ul>
			</div>
		) : (
			<div />
		);
	}
}
const mapStateToProps = (state) => {
	return {
		loginUser: state.user
	};
};

export default connect(mapStateToProps)(SignInLink);
