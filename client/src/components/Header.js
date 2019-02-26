import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SignedInLink from "./SignedInLink";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: ""
		};
	}

	handleChange = (e) => {
		this.setState({
			query: e.target.value
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.dispatch(searchUserByTag(this.state.query));
	};
	render() {
		return (
			<div className='header-seaction'>
				<header className='top_header'>
					<div className='wrapper header-wrapper'>
						<Link to='/' className='logo'>
							tinyKindness
						</Link>
					</div>
					<div className='search-input'>
						<form onSubmit={this.handleSubmit}>
							<input
								type='text'
								placeholder='search'
								className='search'
								onChange={this.handleChange}
							/>
						</form>
						<div className='signIn-Link'>
							<SignedInLink />
						</div>
					</div>
				</header>
			</div>
		);
	}
}

export default connect()(Header);
