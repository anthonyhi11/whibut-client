import React from 'react';
import RestaurantActivity from '../ActivityCards/RestaurantActivity';
import AddModal from './MainDashboard/Modals/AddModal';
import WhibutContext from '../WhibutContext'
import Footer from '../Footer/Footer';

export default class RestaurantsDashboard extends React.Component {
  handleClick = () => {
    this.context.handleAddClick();
  }
    static contextType = WhibutContext
    render() {
      const { restaurants } = this.context;
      let results = restaurants.map((rest, i) => {
        return <RestaurantActivity
                  name={rest.name}
                  type={rest.type}
                  rest={rest.url}
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
            {this.context.isAddActive && <AddModal />}
          </section>
          <section className='results'>
            {results}
          </section>
          <Footer history={this.props.history}/>
        </div>
      )
    }
  }