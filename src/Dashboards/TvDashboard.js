import React from 'react';
import WhibutContext from '../WhibutContext';
import TvActivity from '../ActivityCards/TvActivity';
import AddModal from './MainDashboard/Modals/AddModal'

export default class TvDashboard extends React.Component {

  handleClick = () => {
    this.context.handleAddClick();
  }
    static contextType = WhibutContext
    render() {
      const { tv } = this.props;
      let results = tv.map((show, i) => {
        return <TvActivity
                  title={show.title}
                  genre={show.genre}
                  url={show.url}
                  rating={show.rating}
                  key={i}
                  comments={show.comments} 
                />
      })
      return (
        <div>
          <h1>whibut</h1>
          <h2>TV Shows</h2>
          <section className='buttons'>
            <button className='button' onClick={this.handleClick}>Add</button>
            {this.context.isAddActive && <AddModal />}
          </section>
          <section className='results'>
            {results}
          </section>
  
        </div>
      )
    }
  }