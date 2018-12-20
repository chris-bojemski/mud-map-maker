import React from 'react' 

import './styles/GridForm.css'

class GridForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locked: false,
    }
  }

  toggleLock = () => {
    this.setState({ locked: !this.state.locked })
  }

  handleDeselect = event => {
    event.preventDefault()
    this.props.deselectRoom()
  }

  render() {
    return (
      <div className="grid-form-container">
        <form>
          <label htmlFor="gridRows">Rows: </label>
          <input 
            disabled={this.state.locked}
            type="number" 
            name="gridRows" 
            placeholder="2, 3, 4..." 
            value={this.props.gridRows}
            onChange={(event) => this.props.changeRows(event.target.value)}
          />

          <label htmlFor="gridCols">Cols: </label>
          <input 
            disabled={this.state.locked}
            type="number" 
            name="gridCols" 
            placeholder="2, 3, 4..." 
            value={this.props.gridCols}
            onChange={(event) => this.props.changeCols(event.target.value)}
          />

          <label htmlFor="lock">Lock</label>
          <input 
            type="checkbox"
            onChange={this.toggleLock}
            name="lock"
          />

          <label 
            htmlFor="grid-scale"
          >
            Zoom ({this.props.gridScale}): 
          </label>
          <input 
            type="range"
            name="grid-scale"
            min="25"
            max="200"
            defaultValue={this.props.gridScale}
            onChange={(event) => this.props.updateGridScale(event.target.value)}
          >
          </input>

          <button
            onClick={(event) => this.handleDeselect(event)}
          >
            Deselect Room(s)
          </button>
        </form>
      </div>
    )
  }
}

export default GridForm