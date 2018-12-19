import React from 'react'
import './styles/Square.css'

class Square extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      terrain: '',
      area: ''
    }
  }

  handleClick = () => {
    const id = `row-${this.props.rowNum}-col-${this.props.colNum}`
    this.props.setClicked(id)
  }

  render() {
    const id = `row-${this.props.rowNum}-col-${this.props.colNum}`
    const clicked = id === this.props.clicked ? 'clicked' : ''
    return (
      <div 
        className={`square ${clicked}`}
        id={id}
        onClick={ this.handleClick }
      />
    )
  }
}

export default Square