import React from 'react';
import WhibutContext from '../../WhibutContext';
import AddModal from './Modals/AddModal';
import ViewButtons from './Modals/ViewButtons';
import './MainDashboard.css'
import Navbar from '../../Navbar/Navbar';


export default class MainDashboard extends React.Component {
  
  handleAddClick = () => {
    this.context.handleAddClick();
  }

  static contextType = WhibutContext;
  render() {

    return (
      <div>
        <Navbar history={this.props.history}/>
          <div className='main-dashboard'> 
          <div className='main-dashboard-content'> 
            <header>
              <h1>So...What have you been up to?</h1>
            </header>
              <button className='add-button' onClick={this.handleAddClick}>+</button>
                {this.context.isAddActive && <AddModal history={this.props.history}/>}
              <section>
                <ViewButtons history={this.props.history}/>
              </section>
            </div>
          </div>
        </div>
    )
  }


}