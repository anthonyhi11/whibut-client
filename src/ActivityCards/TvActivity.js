import React from 'react';

export default function TvActivity(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.genre}</p>
      <p>{props.rating}</p>
      <p>{props.comments}</p>
    </div>
  )
}