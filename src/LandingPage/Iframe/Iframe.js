import React from 'react';

export default class Iframe extends React.Component {
  render() {
    return (
      <div>
        <iframe width={this.props.width} height={this.props.height} src={this.props.src} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    )
  }
} 