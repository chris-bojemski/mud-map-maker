import React from 'react' 
import Square from './Square'

import './styles/GridRow.css'

class GridRow extends React.Component {
  makeSquares = numberOfSquares => {
    const squares = []
    for (let i = 0; i < numberOfSquares; i++) {
      squares.push( <Square /> )
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