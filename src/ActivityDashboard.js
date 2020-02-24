import React from 'react';

export default class ActivityDashboard extends React.Component {

  render() {
    return (
      <div>
        <h1>whibut</h1>
        <h2>{this.props.activity[0].activity}</h2>
      </div>
    )
  }
}