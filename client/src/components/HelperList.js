import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getHelperDetails } from '../store/actions/actionCreator';
import Loader from './Loader';
import HelperModal from './HelperModal';


// TODO 
// 1 - Add link tage to username (Front-End)


// Slice longer description (front-end)

class HelperList extends Component {
	state = {
		isLoading: false,
		isUserModalOpen : false,
		currentUser : null
	}
	componentWillMount = () => {
		this.setState({
			isLoading: true,

		})
		this.props.dispatch(getHelperDetails((isSucceed) => {
			if(isSucceed) {
				this.setState({isLoading: false})
			}
		}))
	}

	handleUserModalOpen = e => {
		this.setState({
			isUserModalOpen: !this.state.isUserModalOpen,
			currentUser: this.state.isUserModalOpen ? null : this.props.helpers[e.target.parentElement.id] 
		})
	}

  render() {
		const { helpers } = this.props;
		const { isLoading } = this.state;
		return (
			<main className="helper-table">	
				<div className="table-container wrapper">
					<h2 className="table-caption">List of People you can take help</h2>
					<div className="table-wrapper">
						<table className="highlight">
							<thead>
								<tr>
									<th>Created At</th>
									<th>Name</th>
									<th>Bio</th>
									<th>Strong Areas</th>
									<th>People you know</th>
									<th>Interests</th>
									<th>Tweeter Handle</th>
								</tr>
							</thead>
							{isLoading ? <Loader /> : (
								<tbody>
								{
									helpers && helpers.map((helper, i) => (
								<tr onClick={this.handleUserModalOpen} id={i}>
									<td>{new Date(helper.createdAt).toDateString().slice(4)}</td>
									<td>{helper.name}</td>
									<td>{helper.bio}</td>
									<td>{helper.feedback}</td>
									<td>{helper.introduction}</td>
									<td>{helper.resources}</td>
									<td><a href={`https://twitter.com/${helper.twitterHandle}`}>@{helper.twitterHandle}</a></td>
								</tr>
									))
								}
							</tbody>
							)}
						</table>
					</div>
				</div>
				<HelperModal isModalOpen={this.state.isUserModalOpen} user={this.state.currentUser} handleOpenModal={this.handleUserModalOpen}/>
			</main>
		)
  }
}	

const mapStateToProps = (state) => {
    return {
        helpers: state.helpers
    }
}

export default connect(mapStateToProps)(HelperList)
