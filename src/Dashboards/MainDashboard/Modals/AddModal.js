import React from 'react';
import WhibutContext from '../../../WhibutContext';
import './addmodal.css';
import MovieForm from '../../../Forms/MovieForm';
import TvForm from '../../../Forms/TvForm';
import BookForm from '../../../Forms/BookForm';
import RestaurantForm from '../../../Forms/RestaurantForm';

export default class AddModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieModal: false,
      tvModal: false,
      restaurantModal: false,
      bookModal: false,
    };
  }
  showMovie = () => {
    this.setState({
      movieModal: true,
    });
  };

  showTv = () => {
    this.setState({
      tvModal: true,
    });
  };

  showRestaurant = () => {
    this.setState({
      restaurantModal: true,
    });
  };

  showBook = () => {
    this.setState({
      bookModal: true,
    });
  };

  handleFormCancel = () => {
    this.setState({
      movieModal: false,
      tvModal: false,
      restaurantModal: false,
      bookModal: false,
    });
  };
  static contextType = WhibutContext;
  render() {
    return (
      <div>
        {this.state.movieModal && <MovieForm cancel={this.handleFormCancel} history={this.props.history} />}
        {this.state.tvModal && <TvForm cancel={this.handleFormCancel} history={this.props.history} />}
        {this.state.restaurantModal && <RestaurantForm cancel={this.handleFormCancel} history={this.props.history} />}
        {this.state.bookModal && <BookForm cancel={this.handleFormCancel} history={this.props.history} />}
        <div className="addmodal">
          <p className="add-instructions">Select your category</p>
          <div className="addmodal-button-container">
            <button onClick={this.showMovie} className="addmodal-buttons">
              Movies
            </button>
            <button onClick={this.showTv} className="addmodal-buttons">
              TV
            </button>
            <button onClick={this.showRestaurant} className="addmodal-buttons">
              Restaurants
            </button>
            <button onClick={this.showBook} className="addmodal-buttons">
              Books
            </button>
          </div>
          <p className="cancel-add" onClick={this.context.handleCancel}>
            Cancel
          </p>
        </div>
      </div>
    );
  }
}
