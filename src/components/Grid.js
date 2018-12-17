import React from 'react' 
import GridRow from './GridRow' 

import './styles/Grid.css'

class Grid extends React.Component {
  createGrid = (rows, cols) => {
    const gridRows = []
    for (let i = 0; i < rows; i++) {
      gridRows.push( <GridRow numberOfCols={cols} /> )
    }
    return gridRows
  }

  render() {
    return (
      <div className="grid-container">
        { this.createGrid(this.props.gridRows, this.props.gridCols) }
      </div>
    )
  }

}

export default Grid