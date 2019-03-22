import React, { Component } from "react";
import io from 'socket.io-client';
import {Link} from "react-router-dom"
import Tags from './Tags.js'
const socket = io('http://localhost:8001'); 

import { connect } from "react-redux";
import { submitUserData } from "../store/actions/actionCreator.js";

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
 			introductionTags: [...this.state.introductionTags, tag._id ? tag : {
				 _id : null,
				 name: tag
			 }]
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

  // do not delete reference for socket
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

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.dispatch(submitUserData({
			username: this.props.user.username,
			name: this.props.user.name,
			bio: this.props.user.bio,
			imageURL: this.props.user.imageURL,
			introductions: this.state.introductionTags,
			resources: this.state.resourcesTags,
			feedback: this.state.feedbackTags
		}, this.props.user._id))
	}

	handleIntroductionTag = e => {
		e.preventDefault();
		const introdctionInput = document.querySelector('.introduction');
		this.setState({
			introductionTags: [...this.state.introductionTags, {
				name: introdctionInput.value,
				_id: null
			}]
		})
	}

	handleFeedbackTag = e => {
		e.preventDefault();
		const feedbackInput = document.querySelector('.feedback');
		this.setState({
			feedbackTags: [...this.state.feedbackTags, {
				name: feedbackInput.value,
				_id: null
			}]
		})
	}
	handleResourcesTag = e => {
		e.preventDefault();
		const resourcesInput = document.querySelector('.resources');
		this.setState({
			resourcesTags: [...this.state.resourcesTags, {
				name: resourcesInput.value,
				_id: null
			}]
		})
	}
	render() {
		const { introduction, feedback, resources, introductionTags, feedbackTags, resourcesTags} = this.state;
		const {username, name, bio} = this.props.user;
		return (
			<div className='proposal center'>
      <Link to={`/users/@${username}`}>Profile</Link>
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
							<form onSubmit={this.handleIntroductionTag}>
								<label htmlFor='first_name'>
									INTRODUCTIONS: What type of people you know professionally?
								</label>
								{
									introductionTags && introductionTags.map(tag => <Tags tag={tag}/>)
								}
								<input
									className='proposal-input introduction'
									id='first_name'
									type='text'
									name='introduction'
									onChange={(e) => this.handleChange(e, {
										category: 'introductions'
									})}
								/>
								<div className='suggested-tags'>
									{introduction &&
										introduction.map((tag, index) => (
											<p onClick={() => this.addIntroductionTags(tag)}className="introduction-tag" key={index}>{tag.name}</p>
										))}
								</div>
							</form>
						</div>
						<div className='proposal-field '>
						<form onSubmit={this.handleFeedbackTag}>
							<label htmlFor='first_name'>
								FEEDBACK: What are you so good?
							</label>
							{
								feedbackTags && feedbackTags.map(tag => <Tags tag={tag}/>)
							}
							<input
								className='proposal-input feedback'
								id='first_name'
								type='text'
								name='feedback'
								onChange={(e) => this.handleChange(e, {
									category: 'feedback'
								})}
							/>
							<div className='suggested-tags'>
								{feedback &&
									feedback.map((tag, index) => (
										<p onClick={() => this.addFeedbackTags(tag)} className="introduction-tag" key={index}>{tag.name}</p>
									))}
							</div>
							</form>
						</div>
						<div className='proposal-field '>
						<form onSubmit={this.handleResourcesTag}>
							<label htmlFor='first_name'>
								RESOURCES: What areas do you spend most of your time reading,
								researching, thinking?{" "}
							</label>
							{
								resourcesTags && resourcesTags.map(tag => <Tags tag={tag}/>)
							}
							<input
								className='proposal-input resources'
								id='first_name'
								type='text'
								name='resources'
								onChange={(e) => this.handleChange(e, {
									category: 'resources'
								})}
							/>
							<div className='suggested-tags'>
								{resources &&
									resources.map((tag, index) => (
										<p onClick={() => this.addResourcesTags(tag)} className="introduction-tag" key={index}>{tag.name}</p>
									))}
							</div>
							</form>
						</div>
					</div>
					<div>
					<button className='btn' onClick={this.handleSubmit} >
						Submit
					</button>
					<Link to="/users"><span className="skip-form">Skip</span></Link>
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
