import React from 'react';
import WhibutContext from '../../WhibutContext';
import './modal.css';

export default class AddModal extends React.Component {
  
  static contextType = WhibutContext;
  render() {
    return (
      <div class='modal'>
        <p>Please select dashboard to add to:</p>
        <button>Movies</button>
        <button>TV</button>
        <button>Restaurants</button>
        <button>Books</button>
        <button id='cancel' onClick={this.context.handleCancel}>Cancel</button>
      </div>
    )
  }
}