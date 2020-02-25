import React from 'react';
import WhibutContext from '../../../WhibutContext';
import './modal.css';
import MovieForm from '../../../Forms/MovieForm';
import TvForm from '../../../Forms/TvForm';
import BookForm from '../../../Forms/BookForm'
import RestaurantForm from '../../../Forms/RestaurantForm';

export default class AddModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movieModal: false,
      tvModal: false,
      restaurantModal: false,
      bookModal: false
    }
  }
  showMovie = () => {
    this.setState({
      movieModal: true
    })
  }

  showTv = () => {
    this.setState({
      tvModal: true
    })
  }

  showRestaurant = () => {
    this.setState({
      restaurantModal: true
    })
  }

  showBook = () => {
    this.setState({
      bookModal: true
    })
  }

  handleFormCancel = () => {
    this.setState({
      movieModal: false,
      tvModal: false,
      restaurantModal: false,
      bookModal: false
    })
  }
  static contextType = WhibutContext;
  render() {
    return (
      
        <div className='modal'>
          <p>Please select dashboard to add to:</p>
          <button onClick={this.showMovie}>Movies</button>
          {this.state.movieModal && <MovieForm cancel={this.handleFormCancel}/>}
          <button onClick={this.showTv}>TV</button>
          {this.state.tvModal && <TvForm cancel={this.handleFormCancel} />}
          <button onClick={this.showRestaurant}>Restaurants</button>
          {this.state.restaurantModal && <RestaurantForm cancel={this.handleFormCancel}/>}
          <button onClick={this.showBook}>Books</button>
          {this.state.bookModal && <BookForm cancel={this.handleFormCancel}/>}
          <button id='cancel' onClick={this.context.handleCancel}>Cancel</button>
        </div>
    
    )
  }
}