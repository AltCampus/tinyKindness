import React, { Component } from "react";
import io from 'socket.io-client';

const socket = io('http://localhost:8001'); 

import { connect } from "react-redux";

class KindnessForm extends Component {
	state = {
		introduction: [],
		feedback: [],
		resources: []
  };
  
  // do not delete refrence for socket
	handleChange = (e, { category }) => {
		if(e.target.value) {
			socket.emit('getTags', {
				value : e.target.value,
				category
			})
		} else {
			this.setState({
				[e.target.name] : []
			})
		}
  }

	// handleIntroductionTag = (e) => {
	// 	this.setState({
	// 		introduction: e.target.value
	// 	});
	// 	this.props.dispatch(
	// 		getIntroductionTag(e.target.value, (succeed, tags) => {
	// 			if (succeed) {
	// 				this.setState({
	// 					introductionTags: tags.slice(0, 9)
	// 				});
	// 			}
	// 		})
	// 	);
	// };
	// handleResourcesTags = (e) => {
	// 	this.setState({
	// 		resources: e.target.value
	// 	});
	// 	this.props.dispatch(
	// 		getResourceTags(e.target.value, (succeed, tags) => {
	// 			if (succeed) {
	// 				this.setState({
	// 					resourcesTags: tags.slice(0, 9)
	// 				});
	// 			}
	// 		})
	// 	);
	// };
	// handleFeedbackTags = (e) => {
	// 	this.setState({
	// 		feedback: e.target.value
	// 	});
	// 	this.props.dispatch(
	// 		getFeedbackTags(e.target.value, (succeed, tags) => {
	// 			if (succeed) {
	// 				this.setState({
	// 					feedbackTags: tags.slice(0, 9)
	// 				});
	// 			}
	// 		})
	// 	);
	// };

	getTags = (() => {
		socket.on('sendTags', (data) => {
			const { category, tags } = data;
			switch(category) {
				case "introductions": {
					this.setState({
						introduction: [...tags]
					})
				}
				break;
				case "feedback": {
					this.setState({
						feedback: [...tags]
					})
				}
				break;
				case "resources": {
					this.setState({
						resources: [...tags]
					})
				}
				break;
			}
		})
	})()

	render() {
		const { introduction, feedback, resources } = this.state;
		const {username, name, bio} = this.props.user;

		return (
			<div className='proposal center'>
				<form className='wrapper proposal-form animated bounceIn'>
					<h2 className='proposal-head'>Add Your Details</h2>
					<div className='row'>
						<div className='proposal-field'>
							<label htmlFor='username'>Username</label>
							<input
								className='proposal-input'
								id='first_name'
								type='text'
								name='username'
								value={username}
								disabled
							/>
						</div>
						<div className='proposal-field'>
							<label htmlFor='name'>Your Name</label>
							<input
								className='proposal-input'
								id='first_name'
								type='text'
								name='name'
								value={name}
							/>
						</div>
						<div className='proposal-field'>
							<label htmlFor='bio'>Your Bio</label>
							<input
								className='proposal-input'
								id='first_name'
								type='text'
								name='bio'
								value={bio}
							/>
						</div>
						<div className='proposal-field'>
							<label htmlFor='first_name'>
								INTRODUCTIONS: What type of people you know professionally?
							</label>
							<input
								className='proposal-input'
								id='first_name'
								type='text'
								name='introduction'
								onChange={(e) => this.handleChange(e, {
									category: 'introductions'
								})}
							/>
							<div className='suggested-tags-introductions'>
								{introduction &&
									introduction.map((tag, index) => (
										<p key={index}>{tag.name}</p>
									))}
							</div>
						</div>
						<div className='proposal-field '>
							<label htmlFor='first_name'>
								FEEDBACK: What are you so good?
							</label>
							<input
								className='proposal-input'
								id='first_name'
								type='text'
								name='feedback'
								onChange={(e) => this.handleChange(e, {
									category: 'feedback'
								})}
							/>
							<div className='suggested-tags-feedback'>
								{feedback &&
									feedback.map((tag, index) => (
										<p key={index}>{tag.name}</p>
									))}
							</div>
						</div>
						<div className='proposal-field '>
							<label htmlFor='first_name'>
								RESOURCES: What areas do you spend most of your time reading,
								researching, thinking?{" "}
							</label>
							<input
								className='proposal-input'
								id='first_name'
								type='text'
								name='resources'
								onChange={(e) => this.handleChange(e, {
									category: 'resources'
								})}
							/>
							<div className='suggested-tags-resources'>
								{resources &&
									resources.map((tag, index) => (
										<p key={index}>{tag.name}</p>
									))}
							</div>
						</div>
					</div>
					<button type='submit' className='btn '>
						Submit
					</button>
				</form>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(KindnessForm);
