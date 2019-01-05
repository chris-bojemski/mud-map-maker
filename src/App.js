import React, { Component } from 'react';
import GridBuilder from './components/GridBuilder'
import AssetMenu from './components/AssetMenu'
import Loader from './components/Loader'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      url: '',
      areaId: 0,
    }
  }
  
  updateBaseURL = url => {
    this.setState({ url })
  }

  updateAreaId = areaId => {
    this.setState({ areaId })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={() => (<Loader updateBaseURL={this.updateBaseURL} />)}/>
          <Route path='/menu' component={() => (<AssetMenu url={this.state.url} updateAreaId={this.udpateAreaId} />)}/>
          <Route path='/area' component={() => (<GridBuilder url={this.state.url} />)}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
