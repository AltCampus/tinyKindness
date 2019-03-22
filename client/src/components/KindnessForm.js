import React, { Component } from "react";
import io from 'socket.io-client';
import {Link} from "react-router-dom"
import Tags from './Tags.js'
const socket = io('http://localhost:8001'); 

import { connect } from "react-redux";
import { submitUserData } from "../store/actions/actionCreator.js";
import kindnessForm from "../store/actions/kindnessForm.actions.js";

// TODO:
// 1 - On Adding a suggestion make suggestion list empty
// 2 - Make Redundant code in components
// 3 - Give a button for adding tags

class KindnessForm extends Component {
	state = {
		Introduction: [],
		Feedback: [],
		Resources: []
  };

	// Function for adding new Tags or existing tags to the user data
	addTags = (e, {tag, category}) => {		
		this.props.dispatch(kindnessForm.addTagsToForm({
			tag,
			category
		}))
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
						Introduction: [...tags]
					})
				}
				break;
				case "feedback": {
					this.setState({
						Feedback: [...tags]
					})
				}
				break;
				case "resources": {
					this.setState({
						Resources: [...tags]
					})
				}
				break;
			}
		})
	})()

	handleSubmit = (e) => {
		e.preventDefault();
	}
	render() {
		const { Introduction, Resources, Feedback} = this.state;
		const {username, name, bio, introductions, feedback, resources} = this.props.user;
		
		<div className='proposal center'>
      <Link to={`/users/@${username}`}>Profile</Link>
			return (
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
							<form onSubmit={(e) => {
								e.preventDefault();
								this.addTags(e, {
									tag: {
										name: document.querySelector(`.introduction`).value,
										id: null,
									},
									category: 'introductions'
								})
							}}>
								<label htmlFor='first_name'>
									INTRODUCTIONS: What type of people you know professionally?
								</label>
								{
									introductions && introductions.map(tag => <Tags tag={tag}/>)
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
									{Introduction &&
										Introduction.map((tag, index) => (
											<p onClick={(e) => this.addTags(e,{
												tag,
												category: 'introductions'
											})}className="introduction-tag" key={index}>{tag.name}</p>
										))}
								</div>
							</form>
						</div>
						<div className='proposal-field '>
						<form onSubmit={(e) => {
								e.preventDefault();
								this.addTags(e, {
									tag: {
										name: document.querySelector(`.feedback`).value,
										id: null,
									},
									category: 'feedback'
								})
							}}>
							<label htmlFor='first_name'>
								FEEDBACK: What are you so good?
							</label>
							{
								feedback && feedback.map(tag => <Tags tag={tag}/>)
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
								{Feedback &&
									Feedback.map((tag, index) => (
										<p onClick={(e) => this.addTags(e,{
											tag,
											category: 'feedback'
										})} className="introduction-tag" key={index}>{tag.name}</p>
									))}
							</div>
							</form>
						</div>
						<div className='proposal-field '>
						<form onSubmit={(e) => {
								e.preventDefault();
								this.addTags(e, {
									tag: {
										name: document.querySelector(`.resources`).value,
										id: null,
									},
									category: 'resources'
								})
							}}>
							<label htmlFor='first_name'>
								RESOURCES: What areas do you spend most of your time reading,
								researching, thinking?{" "}
							</label>
							{
								resources && resources.map(tag => <Tags tag={tag}/>)
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
								{Resources &&
									Resources.map((tag, index) => (
										<p onClick={(e) => this.addTags(e,{
											tag,
											category: 'resources'
										})} className="introduction-tag" key={index}>{tag.name}</p>
									))}
							</div>category
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
