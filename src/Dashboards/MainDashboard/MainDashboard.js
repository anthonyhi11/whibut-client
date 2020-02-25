import React from 'react';
import WhibutContext from '../../WhibutContext';
import AddModal from './Modals/AddModal';
import ViewButtons from './Modals/ViewButtons';
import './MainDashboard.css'
import Footer from '../../Footer/Footer';


export default class MainDashboard extends React.Component {
  
  handleAddClick = () => {
    this.context.handleAddClick();
  }

  static contextType = WhibutContext;
  render() {

    return (

        <div>
          <header>
            <h1 id='hero'>whibut</h1>
            <p>Hey, User! What have you been up to?</p>
          </header>
          <main>
            <section className='buttons'>
              <button className='button' onClick={this.handleAddClick}>Add</button>
              {this.context.isAddActive && <AddModal history={this.props.history}/>}
            </section>
            <section className='view-buttons'>
              <ViewButtons />
            </section>
          </main>
          <Footer history={this.props.history}/>
        </div>
    )
  }


}