import React from 'react' 
import Square from './Square'

import './styles/GridRow.css'

class GridRow extends React.Component {
  makeSquares = numberOfSquares => {
    const squares = []
    for (let i = 0; i < numberOfSquares; i++) {
      squares.push( 
        <Square 
          key={`row-${this.props.rowNum}-col-${i}`} 
          rowNum={this.props.rowNum}
          colNum={i}
          clicked={this.props.clicked}
          setClicked={this.props.setClicked}
          gridScale={this.props.gridScale}
        /> 
      )
    }
    return squares
  }

  render() {
    return (
      <div className="grid-row">
        { this.makeSquares(this.props.numberOfCols) }
      </div>
    )
  }
}

export default GridRow