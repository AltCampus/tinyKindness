import React, { Component } from "react";
import io from 'socket.io-client';
import {Link} from "react-router-dom"
import Tags from './Tags.js'
const socket = io('http://localhost:8001'); 

import { connect } from "react-redux";

class KindnessForm extends Component {
	state = {
		introduction: [],
		feedback: [],
		resources: [],
		introductionTags: [],
		feedbackTags: [],
		resourcesTags: []

  };
  

 	addIntroductionTags = (tag) => {
 		this.setState({
 			introductionTags: [...this.state.introductionTags, tag]
 		})
 	}

 	addFeedbackTags = (tag) => {
 		this.setState({
 			feedbackTags: [...this.state.feedbackTags, tag]
 		})
 	}

 	addResourcesTags = (tag) => {
 		this.setState({
 			resourcesTags: [...this.state.resourcesTags, tag]
 		})
 	}

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
		const { introduction, feedback, resources, introductionTags, feedbackTags, resourcesTags} = this.state;
		const {username, name, bio} = this.props.user;

		return (
			<div className='proposal center'>
      <Link to={`/user/@${username}`}>Profile</Link>
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
								className='proposal-input'deleteTag
								id='first_name'
								type='text'
								name='introduction'
								onChange={(e) => this.handleChange(e, {
									category: 'introductions'
								})}
							/>
							{
								introductionTags && introductionTags.map(tag => <Tags tag={tag}/>)
							}
							<div className='suggested-tags'>
								{introduction &&
									introduction.map((tag, index) => (
										<p onClick={() => this.addIntroductionTags(tag.name)}className="introduction-tag" key={index}>{tag.name}</p>
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
							{
								feedbackTags && feedbackTags.map(tag => <Tags tag={tag}/>)
							}
							<div className='suggested-tags'>
								{feedback &&
									feedback.map((tag, index) => (
										<p onClick={() => this.addFeedbackTags(tag.name)} className="introduction-tag" key={index}>{tag.name}</p>
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
							{
								resourcesTags && resourcesTags.map(tag => <Tags tag={tag}/>)
							}
							<div className='suggested-tags'>
								{resources &&
									resources.map((tag, index) => (
										<p onClick={() => this.addResourcesTags(tag.name)} className="introduction-tag" key={index}>{tag.name}</p>
									))}
							</div>
						</div>
					</div>
					<div>
					<button type='submit' className='btn '>
						Submit
					</button>
					<span className="skip-form">Skip</span>
					</div>

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
