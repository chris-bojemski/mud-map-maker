import React from 'react'
import './styles/Square.css'

class Square extends React.Component {
  render() {
    const id = `row-${this.props.rowNum}-col-${this.props.colNum}`
    const clicked = id === this.props.clicked ? 'clicked' : ''
    return (
      <div 
        className={`square ${clicked}`}
        id={id}
        onClick={ () => this.props.setClicked(id) }
      />
    )
  }
}

export default Square