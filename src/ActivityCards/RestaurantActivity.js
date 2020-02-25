import React from 'react';

export default function TvActivity(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.type}</p>
      <p>{props.rating}</p>
      <p>{props.comments}</p>
    </div>
  )
}