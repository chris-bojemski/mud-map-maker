import React from 'react' 
import { Link } from 'react-router-dom'

import './styles/AssetMenu.css'

class AssetMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      areas: []
    }
  }

  componentDidMount() {
    if (this.props.url) {
      fetch(`${this.props.url}/areas`)
      .then(r=>r.json())
      .then(j => {
        this.setState(
          {areas: j}
        )
      }, console.log("Fetched areas"))
    } else {
      console.log("No URL")
    }
  }

  makeAreaOptions = areas => {
    return areas.map( area => {
      return (
        <option key={`area-select-${area.id}`} value={area.id}>{area.name}</option>
      )
    })
  }
  
  render() {
    return (
      <>
        <h1 className="asset-menu-header">Asset Menu</h1>
        <div className="asset-menu-container">

          <div className="asset-menu asset-menu-area">
            <h3>Areas</h3>
            <p>
              Areas are whole sections of the game world. Typically, they contain multiple rooms.
            </p>
            <Link to="/area">New Area</Link> {/* make this set the selected area id = 0 */}
            <hr></hr>
            <select>
              {this.makeAreaOptions(this.state.areas)}
            </select>
            <br></br>
            <Link to="/area">Edit Area</Link>
          </div>

          <div className="asset-menu asset-menu-enemy">
            <h3>Enemies</h3>
            <p>
              Enemies are combatants that fight the player. They are based on templates and placed in specific rooms.
            </p>
            <Link to="/">New Enemy</Link> {/* make this set the selected enemy id = 0 */}
            <hr></hr>
            <Link to="/">Edit Enemy</Link>
          </div>

        </div>
      </>
    )
  }
}

export default AssetMenu