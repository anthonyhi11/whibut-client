import React from 'react';
import WhibutContext from '../../WhibutContext';
import AddModal from './Modals/AddModal';
import ViewButtons from './Modals/ViewButtons';
import './MainDashboard.css'
import Footer from '../../Footer/Footer';


export default class MainDashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isViewActive: false,
      isAddActive: false,
    }
  }
  handleAddClick = () => {
    this.setState({
      isAddActive: true,
    })
  }

  handleCancel = () => {
    this.setState({
      isAddActive: false,
    })
  }
  static contextType = WhibutContext;
  render() {
    const value = {
      handleCancel: this.handleCancel,
    }
    return (
      <WhibutContext.Provider value={value}>
        <div>
          <header>
            <h1 id='hero'>whibudt</h1>
            <p>Hey, User! What have you been up to?</p>
          </header>
          <main>
            <section className='buttons'>
              <button className='button' onClick={this.handleAddClick}>Add</button>
              {this.state.isAddActive && <AddModal />}
            </section>
            <section className='view-buttons'>
              <ViewButtons />
            </section>
          </main>
          <Footer />
        </div>
      </WhibutContext.Provider>
    )
  }


}