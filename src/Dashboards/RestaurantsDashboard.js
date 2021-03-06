import React from 'react';
import RestaurantActivity from '../ActivityCards/RestaurantActivity';
import RestaurantForm from '../Forms/RestaurantForm';
import WhibutContext from '../WhibutContext';
import Navbar from '../Navbar/Navbar';
import RestaurantsApiService from '../services/restaurants-api-service';
import Footer from '../Navbar/Footer';

export default class RestaurantsDashboard extends React.Component {
  handleClick = () => {
    this.context.handleAddClick();
  };
  componentDidMount() {
    RestaurantsApiService.getRest().then((rest) => {
      this.context.getRestaurants(rest);
    });
  }
  static contextType = WhibutContext;
  render() {
    const { restaurants } = this.context;
    let results = restaurants.map((rest, i) => {
      return (
        <RestaurantActivity
          id={rest.id}
          name={rest.restaurant_name}
          type={rest.restaurant_type}
          rest={rest.website}
          rating={rest.rating}
          key={i}
          comments={rest.comments}
        />
      );
    });
    return (
      <div className="activity-dash-container">
        <Navbar history={this.props.history} />
        <Footer history={this.props.history} />
        <div className="activity-dash">
          <div className="activity-add-div">
            <h1>Restaurants</h1>
          </div>
          <div className="randomdiv">{this.context.isAddActive && <RestaurantForm history={this.props.history} />}</div>
          <div className="activity-results">{results}</div>
          <div className="bottom-div"></div>
        </div>
      </div>
    );
  }
}
