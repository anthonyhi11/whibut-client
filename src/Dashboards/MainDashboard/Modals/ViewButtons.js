import React from 'react';
import WhibutContext from '../../../WhibutContext';
import './modal.css';
import { Link } from 'react-router-dom';

export default class ViewButtons extends React.Component {
  
  static contextType = WhibutContext;
  render() {
    return (
      <div className='viewbuttons'>
        <p>Please select dashboard to view:</p>
        <div className='buttons-container'>
        <Link to='/dashboard/movies'><div className='view'>Movies</div></Link>
        <Link to='/dashboard/tv'><div className='view'>TV</div></Link>
        <Link to='/dashboard/restaurants'><div className='view'>Restaurants</div></Link>
        <Link to='/dashboard/books'><div className='view'>Books</div></Link>
        </div>
      </div>
    )
  }
}