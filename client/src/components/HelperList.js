import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getHelperDetails } from '../store/actions/actionCreator';

// TODO 
// 1 - Add link tage to username (Front-End)
// 2 - Add link to twitter handle (Front-End)
// 3 - Wrape both anchor in td 
//   - Example <td> <Link to="path">Ashwani</Link> </td>


class HelperList extends Component {
	componentWillMount = () => {
		this.props.dispatch(getHelperDetails())
	}
  render() {
		const { helpers } = this.props;
		console.log(helpers)
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

							<tbody>
								{
									helpers && helpers.map(helper => (
								<tr>
									<td>{new Date(helper.createdAt).toDateString().slice(4)}</td>
									<td>{helper.name}</td>
									<td>{helper.bio}</td>
									<td>{helper.feedback}</td>
									<td>{helper.introduction}</td>
									<td>{helper.resources}</td>
									<td><a href={`https://twitter.com/${helper.twitterHandle}`}>{helper.twitterHandle}</a></td>
								</tr>
									))
								}
							</tbody>
						</table>
					</div>
				</div>
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
