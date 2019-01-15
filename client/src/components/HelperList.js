import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getHelperDetails } from '../store/actions/actionCreator';

class HelperList extends Component {
	componentWillMount = () => {
		// this.props.dispatch(getHelperDetails())
	}
  render() {
		const { helpers } = this.props;
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
								<tr>
									<td>Alvin</td>
									<td>Eclair</td>
									<td>$0.87</td>
									<td>Alvin</td>
									<td>Eclair</td>
									<td>$0.87</td>
									<td>$0.87</td>
								</tr>
								<tr>
									<td>Alvin</td>
									<td>Eclair</td>
									<td>$0.87</td>
									<td>Alvin</td>
									<td>Eclair</td>
									<td>$0.87</td>
									<td>$0.87</td>
								</tr>
								<tr>
									<td>Alvin</td>
									<td>Eclair</td>
									<td>$0.87</td>
									<td>Alvin</td>
									<td>Eclair</td>
									<td>$0.87</td>
									<td>$0.87</td>
								</tr>
								<tr>
									<td>Alvin</td>
									<td>Eclair</td>
									<td>$0.87</td>
									<td>Alvin</td>
									<td>Eclair</td>
									<td>$0.87</td>
									<td>$0.87</td>
								</tr>
								<tr>
									<td>Alvin</td>
									<td>Eclair</td>
									<td>$0.87</td>
									<td>Alvin</td>
									<td>Eclair</td>
									<td>$0.87</td>
									<td>$0.87</td>
								</tr>
								<tr>
									<td>Alvin</td>
									<td>Eclair</td>
									<td>$0.87</td>
									<td>Alvin</td>
									<td>Eclair</td>
									<td>$0.87</td>
									<td>$0.87</td>
								</tr>
								<tr>
									<td>Alvin</td>
									<td>Eclair</td>
									<td>$0.87</td>
									<td>Alvin</td>
									<td>Eclair</td>
									<td>$0.87</td>
									<td>$0.87</td>
								</tr>
								<tr>
									<td>Alvin</td>
									<td>Eclair</td>
									<td>$0.87</td>
									<td>Alvin</td>
									<td>Eclair</td>
									<td>$0.87</td>
									<td>$0.87</td>
								</tr>
								<tr>
									<td>Alvin</td>
									<td>Eclair</td>
									<td>$0.87</td>
									<td>Alvin</td>
									<td>Eclair</td>
									<td>$0.87</td>
									<td>$0.87</td>
								</tr>
								<tr>
									<td>Alvin</td>
									<td>Eclair</td>
									<td>$0.87</td>
									<td>Alvin</td>
									<td>Eclair</td>
									<td>$0.87</td>
									<td>$0.87</td>
								</tr>
								<tr>
									<td>Alvin</td>
									<td>Eclair</td>
									<td>$0.87</td>
									<td>Alvin</td>
									<td>Eclair</td>
									<td>$0.87</td>
									<td>$0.87</td>
								</tr>
								<tr>
									<td>Alvin</td>
									<td>Eclair</td>
									<td>$0.87</td>
									<td>Alvin</td>
									<td>Eclair</td>
									<td>$0.87</td>
									<td>$0.87</td>
								</tr>
								<tr>
									<td>Alvin</td>
									<td>Eclair</td>
									<td>$0.87</td>
									<td>Alvin</td>
									<td>Eclair</td>
									<td>$0.87</td>
									<td>$0.87</td>
								</tr>
								<tr>
									<td>Alvin</td>
									<td>Eclair</td>
									<td>$0.87</td>
									<td>Alvin</td>
									<td>Eclair</td>
									<td>$0.87</td>
									<td>$0.87</td>
								</tr>
								<tr>
									<td>Alvin</td>
									<td>Eclair</td>
									<td>$0.87</td>
									<td>Alvin</td>
									<td>Eclair</td>
									<td>$0.87</td>
									<td>$0.87</td>
								</tr>
								<tr>
									<td>Alvin</td>
									<td>Eclair</td>
									<td>$0.87</td>
									<td>Alvin</td>
									<td>Eclair</td>
									<td>$0.87</td>
									<td>$0.87</td>
								</tr>
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
