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

  getDetailsFromProps = () => {
    if (this.props.clicked) {
      return (
        <>
          <h3>{this.props.clicked}</h3>
          <label htmlFor="description">
            Description:
          </label>
          <br></br>
          <input
            type="textarea"
            value={this.state.description}
            onChange={this.changeDescription}
            name="description"
          ></input>
        </>
      )
    } else {
      return (
        <h3>Nothing selected.</h3>
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