import React from 'react';
import './howtouse.css';

export default class HowToUse extends React.Component {
  handleCancel = () => {
    this.props.handleCancel();
  };

  render() {
    return (
      <div className="howtouse-modal">
        <h1>What is WHIBUT?</h1>
        <p>
          What Have I Been Up To?: A full-stack application built to help users keep track of all the activities they've
          done. From rating movies, tv s hows, or books - to logging that amazing oyster bar you went to in NOLA last
          spring break. You'll never forget what you've done and how you felt about it.
        </p>
        <div>
          <h2>How to use</h2>
          <p>1. Create an account or use the DEMO USER button on the login modal.</p>
          <p>2. Do (or watch) something... </p>
          <p>3. Click the add button, select the activity, and voila!</p>
          <p>4. Check out the dashboard for the activity to see your post</p>
        </div>
        <div>
          <h2>What else can I do?</h2>
          <p>You can change your username or password on the settings page</p>
          <p>Rest easy knowing you'll never forget all the things you've done.</p>
          <p onClick={this.handleCancel} id="close-button">
            close
          </p>
        </div>
      </div>
    );
  }
}
