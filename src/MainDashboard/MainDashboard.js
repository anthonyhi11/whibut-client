import React from 'react';
import WhibutContext from '../WhibutContext';
import AddModal from './Modals/AddModal';
import ViewModal from './Modals/ViewModal';
import './MainDashboard.css'

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

  handleViewClick = () => {
    this.setState({
      isViewActive: true,
    })
  }

  handleMainCancel = () => {
    this.setState({
      isAddActive: false,
      isViewActive: false,
    })
  }
  static contextType = WhibutContext;
  render() {
    const value = {
      handleCancel: this.handleMainCancel,
    }
    return (
      <WhibutContext.Provider value={value}>
        <div>
          <header>
            <h1 id='hero'>whibut</h1>
            <p>Hey, User! What have you been up to?</p>
          </header>
          <main>
            <section className='buttons'>
              <button className='button' onClick={this.handleAddClick}>Add</button>
              {this.state.isAddActive && <AddModal />}
              <button className='button' onClick={this.handleViewClick}>View</button>
              {this.state.isViewActive && <ViewModal />}
            </section>
            <section className='recents'>
              <h2>Recents</h2>
            </section>
          </main>
          <footer className='navbar'>
          </footer>
        </div>
      </WhibutContext.Provider>
    )
  }


}