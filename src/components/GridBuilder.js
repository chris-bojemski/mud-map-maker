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
      gridScale: 25,
      clicked: '',
      clickedDescription: '',
    }
  }

  updateGridScale = gridScale => {
    this.setState({ gridScale })
  }

  changeRows = gridRows => {
    this.setState({ gridRows })
  }

  changeCols = gridCols => {
    this.setState({ gridCols })
  }

  setClicked = squareId => {
    this.setState({ 
      clicked: squareId
    })
  }

  deselectRoom = () => {
    this.setState({ clicked: '' }, () => {
      console.log("Deselected.")
    })
  }

  render() {
    return (
      <div>
        <GridForm 
          gridRows={this.state.gridRows}
          gridCols={this.state.gridCols}
          gridScale={this.state.gridScale}
          changeRows={this.changeRows}
          changeCols={this.changeCols}
          deselectRoom={this.deselectRoom}
          updateGridScale={this.updateGridScale}
        />
        <DetailPanel 
          noUrlWarning={!this.props.url}
          clicked={this.state.clicked}
          clickedDescription={this.state.clickedDescription}
        />
        <Grid 
          gridRows={this.state.gridRows}
          gridCols={this.state.gridCols}
          clicked={this.state.clicked}
          setClicked={this.setClicked}
          gridScale={this.state.gridScale}
        />
      </div>
    )
  }
}

export default GridBuilder