import React from 'react';
import WhibutContext from '../../WhibutContext';
import './modal.css';
import { Link } from 'react-router-dom';

export default class ViewModal extends React.Component {
  
  static contextType = WhibutContext;
  render() {
    return (
      <div class='modal'>
        <p>Please select dashboard to view:</p>
        <Link to='/dashboard/movies'><button>Movies</button> </Link>
        <Link to='/dashboard/tv'><button>TV</button></Link>
        <Link to='/dashboard/restaurants'><button>Restaurants</button></Link>
        <Link to='/dashboard/books'><button>Books</button></Link>
        <button id='cancel' onClick={this.context.handleCancel}>Cancel</button>
      </div>
    )
  }
}