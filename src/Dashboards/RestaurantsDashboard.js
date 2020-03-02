import React from 'react';
import RestaurantActivity from '../ActivityCards/RestaurantActivity';
import RestaurantForm from '../Forms/RestaurantForm';
import WhibutContext from '../WhibutContext'
import Navbar from '../Navbar/Navbar';
import RestaurantsApiService from '../services/restaurants-api-service';

export default class RestaurantsDashboard extends React.Component {
  handleClick = () => {
    this.context.handleAddClick();
  }
  componentDidMount() {
    RestaurantsApiService.getRest()
      .then(rest => {
        this.context.getRestaurants(rest)
      })
  }
    static contextType = WhibutContext
    render() {
      const { restaurants } = this.context;
      let results = restaurants.map((rest, i) => {
        return <RestaurantActivity
                  id={rest.id}
                  name={rest.restaurant_name}
                  type={rest.restaurant_type}
                  rest={rest.website}
                  rating={rest.rating}
                  key={i}
                  comments={rest.comments} 
                />
      })
      return (
        <div>
          <h1>whibut</h1>
          <h2>Restaurants</h2>
          <section className='buttons'>
            <button className='button' onClick={this.handleClick}>Add</button>
            {this.context.isAddActive && <RestaurantForm history={this.props.history}/>}
          </section>
          <section className='results'>
            {results}
          </section>
          <Navbar history={this.props.history}/>
        </div>
      )
    }
  }