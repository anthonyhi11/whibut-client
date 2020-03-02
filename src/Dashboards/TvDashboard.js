import React from 'react';
import WhibutContext from '../WhibutContext';
import TvActivity from '../ActivityCards/TvActivity';
import TvForm from '../Forms/TvForm';
import Navbar from '../Navbar/Navbar';
import TvApiService from '../services/tv-api-service';

export default class TvDashboard extends React.Component {

  handleClick = () => {
    this.context.handleAddClick();
  }
    componentDidMount() {
      TvApiService.getTv()
        .then(tv => {
          this.context.getTv(tv)
        })
    }
    static contextType = WhibutContext
    render() {
      const { tv } = this.context;
      let results = tv.map((show, i) => {
        return <TvActivity
                  id={show.id}
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
            {this.context.isAddActive && <TvForm history={this.props.history}/>}
          </section>
          <section className='results'>
            {results}
          </section>
          <Navbar history={this.props.history}/>
        </div>
      )
    }
  }