import React from 'react' 
import Grid from './Grid'
import GridForm from './GridForm'

class GridBuilder extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      gridRows: 2,
      gridCols: 2
    }
  }

  changeRows = gridRows => {
    this.setState({ gridRows })
  }

  changeCols = gridCols => {
    this.setState({ gridCols })
  }

  render() {
    return (
      <div>
        <GridForm 
          gridRows={this.state.gridRows}
          gridCols={this.state.gridCols}
          changeRows={this.changeRows}
          changeCols={this.changeCols}
        />
        <Grid 
          gridRows={this.state.gridRows}
          gridCols={this.state.gridCols}
        />
      </div>
    )
  }
}

export default GridBuilder