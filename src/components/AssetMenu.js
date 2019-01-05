import React from 'react' 
import { Link } from 'react-router-dom'

import './styles/AssetMenu.css'

class AssetMenu extends React.Component {
  
  render() {
    return (
      <>
        <h1 className="asset-menu-header">Asset Menu</h1>
        <div className="asset-menu-container">
          <div className="asset-menu asset-menu-area">
            <p>
              Areas are whole sections of the game world. Typically, they contain multiple rooms.
            </p>
            <Link to="/area">New Area</Link>
          </div>
        </div>
      </>
    )
  }
}

export default AssetMenu