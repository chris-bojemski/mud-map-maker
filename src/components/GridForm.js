import React from 'react' 

import './styles/GridForm.css'

class GridForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locked: false
    }
  }

  toggleLock = () => {
    this.setState({ locked: !this.state.locked })
  }

  render() {
    return (
      <div className="grid-form-container">
        <form>
          <label for="gridRows">Rows: </label>
          <input 
            disabled={this.state.locked}
            type="number" 
            name="gridRows" 
            placeholder="2, 3, 4..." 
            value={this.props.gridRows}
            onChange={(event) => this.props.changeRows(event.target.value)}
          />

          <label for="gridCols">Cols: </label>
          <input 
            disabled={this.state.locked}
            type="number" 
            name="gridCols" 
            placeholder="2, 3, 4..." 
            value={this.props.gridCols}
            onChange={(event) => this.props.changeCols(event.target.value)}
          />

          <label for="lock">Lock?</label>
          <input 
            type="checkbox"
            onChange={this.toggleLock}
          />
        </form>
      </div>
    )
  }
}

export default GridForm