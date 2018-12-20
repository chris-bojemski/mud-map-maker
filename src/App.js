import React, { Component } from 'react';
import GridBuilder from './components/GridBuilder'
import Loader from './components/Loader'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      url: ''
    }
  }
  
  updateBaseURL = url => {
    this.setState({ url })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={() => (<Loader updateBaseURL={this.updateBaseURL} />)}/>
          <Route path='/build' component={() => (<GridBuilder url={this.state.url} />)}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
