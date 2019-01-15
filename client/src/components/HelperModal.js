import React, { Component } from 'react';

class HelperModal extends Component {
  render() {
    console.log(this.props)
    const { isModalOpen, user, handleOpenModal} = this.props;
    return (
      user ? (
        <div className="about-container">
        <div className={`outer ${isModalOpen ? 'open' : ''}`}>
          <div className="about middle">
            <div className="about-modal user-popup animated bounceIn">
              <h2 className="about-header center">{user.name}</h2>
              <div className="user-info">
                <div className="user-bio">{user.bio}</div>
                <a href="" className="twitter-handle">@{user.twitterHandle}</a>
              </div>
              <div className="scroll-box">
                <div className="user-details">
                  <div className="user-mini-section">
                    <h4 className="modal-mini-head">Strong Areas</h4>
                    <p className="user-detail modal-user-detail">{user.feedback}</p>
                  </div>
                  <div className="user-mini-section">
                    <h4 className="modal-mini-head">People You Know</h4>
                    <p className="user-detail modal-user-detail">{user.introduction}</p>
                  </div>
                  <div className="user-mini-section">
                    <h4 className="modal-mini-head">Interests</h4>
                    <p className="user-detail modal-user-detail">{user.resources}</p>
                  </div>
                </div>
              </div>
              <button className="btn close-about" onClick={() => handleOpenModal()}>x</button>
            </div>
          </div>
        </div>
      </div>
      ) : ''
    );
  }
}

export default HelperModal;