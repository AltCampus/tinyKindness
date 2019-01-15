import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="outer open">
          <div className="about middle">
            <div className="about-modal animated bounceIn">
              <h2 className="about-header center">About tinyKindness</h2>
              <div className="scroll-box">
                <p className="about-description">
                Do you feel the world has given you a lot? Have you benefited from someone else's generosity - their advice, guidance, connections, or inspiration. Reflect on your life and see how tiny acts of kindness from others have made a difference in getting you to where you are today.
                </p>
                <p className="about-description">
                How cool would it be for you to pay it forward with your tiny acts of kindness for others?
                </p>
                <p className="about-description">
                We know that giving your entire time or money to someone else is big ask. So rather than waiting for that one fine day where you'll start helping strangers, start today by helping someone else by investing as little as 5 minutes.
                </p>
                <h3 className='about-subheader'>How it works</h3>
                <ol>
                  <li>1. You mention here what  possibly you can help with. Everyone knows something or someone unique that others can benefit from.</li>
                  <li>2. Others go through this publicly visible sheet and if their needs match with what you can offer, they will tweet/DM to you on Twitter</li>
                  <li>3. If what they ask is quick, specific and a good fit for you, you can help them (otherwise, you can simply ignore)</li>
                </ol>
              </div>
              <button className="btn close-about">x</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;