import React from 'react';
import WhibutContext from '../WhibutContext';
import TvActivity from '../ActivityCards/TvActivity';
import TvForm from '../Forms/TvForm';
import Navbar from '../Navbar/Navbar';
import TvApiService from '../services/tv-api-service';
import Footer from '../Navbar/Footer';

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
        <div className='activity-dash-container'>
          <Navbar history={this.props.history}/>
          <Footer history={this.props.history}/>
          <div className='activity-dash'>
            <div className='activity-add-div'>
              <h1>TV Shows</h1>
            </div>
            <div className='randomdiv'>
              {this.context.isAddActive && <TvForm history={this.props.history}/>}
            </div>
            <div className='activity-results'>
              {results}
            </div>
            <div className='bottom-div'></div>
          </div>
         </div>
      )
    }
  }