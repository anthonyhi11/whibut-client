import React from 'react';

export default function BookActivity(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.author}</p>
      <p>{props.genre}</p>
      <p>{props.rating}</p>
      <p>{props.comments}</p>
    </div>
  )
}