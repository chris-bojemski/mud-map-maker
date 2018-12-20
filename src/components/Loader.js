import React from 'react' 
import { Link } from 'react-router-dom'

import './styles/Loader.css'

class Loader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: ''
    }
  }

  handleSubmit = () => {
    console.log('hello')
    this.props.updateBaseURL(this.state.url)
  }

  handleUrlChange = event => {
    this.setState({ url: event.target.value })
  } 

  render() {
    return (
      <div className="centering-container">
        <div className="loader-form-container">
          <div className="loader-form">
            <h3>Please enter a base URL for loading and saving map & asset data.</h3>
            <p>If you have the MUD Map Maker development server deployed locally, this is likely <a href="http://localhost:4000">http://localhost:4000</a>. <strong>Please exercise caution</strong> when connecting to someone else's MUD Map Maker API.</p>
            <input type="text" onChange={(event) => this.handleUrlChange(event)}></input>
            <br></br>
            <Link to="/build" onClick={this.handleSubmit}>Submit & Load</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Loader