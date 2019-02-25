import React, { Component } from "react";

class HelperList extends Component {
  render() {
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
                  <td>25/02/2019</td>
                  <td>Ashwani Goswami</td>
                  <td>Web Developer</td>
                  <td>blah blah blah</td>
                  <td>blah blah</td>
                  <td>blah</td>
                  <td>
                    <a href={`https://twitter.com/ashwanigg3`}>ashwanigg3</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    );
  }
}

export default connect()(HelperList);
