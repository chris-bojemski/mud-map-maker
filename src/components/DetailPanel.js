import React from 'react'

import './styles/DetailPanel.css'

class DetailPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      description: this.props.clickedDescription
    }
  }

  changeDescription = event => {
    this.setState({ description: event.target.value })
  }

  createBanner = () => {
    if (this.props.noUrlWarning) {
      return (
        <div className="warning-banner">
          <p>There's no URL selected; you're in playground mode, and nothing will save.</p>
          <p>If you want to save your data, <a href="/">click here.</a></p>
        </div>
      )
    } else {
      return null
    }
  }

  getDetailsFromProps = () => {
    const banner = this.createBanner()
    if (this.props.clicked) {
      return (
        <>
          {banner}
          <h3>{this.props.clicked}</h3>
          <label htmlFor="description">
            Description:
          </label>
          <br></br>
          <textarea
            className="detail-description"
            value={this.state.description}
            onChange={this.changeDescription}
            name="description"
          ></textarea>
          <button
            className="detail-save-button"
          >
            Save
          </button>
        </>
      )
    } else {
      return (
        <>
          {banner}
          <h3>Nothing selected.</h3>
        </>
      )
    }
  }

  render() {
    return (
      <div className={`detail-panel`}>
        <h2>Detail</h2>
        <hr></hr>
        {this.getDetailsFromProps()}
      </div>
    )
  }
}

export default DetailPanel