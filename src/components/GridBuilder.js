import React from 'react' 
import Grid from './Grid'
import GridForm from './GridForm'
import DetailPanel from './DetailPanel'

class GridBuilder extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      gridRows: 2,
      gridCols: 2,
      clicked: ''
    }
  }

  changeRows = gridRows => {
    this.setState({ gridRows })
  }

  changeCols = gridCols => {
    this.setState({ gridCols })
  }

  setClicked = squareID => {
    this.setState({ 
      clicked: squareID
    })
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
        <DetailPanel 
          clicked={this.state.clicked}
        />
        <Grid 
          gridRows={this.state.gridRows}
          gridCols={this.state.gridCols}
          clicked={this.state.clicked}
          setClicked={this.setClicked}
        />
      </div>
    )
  }
}

export default GridBuilder