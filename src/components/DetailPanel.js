import React from 'react'

import './styles/DetailPanel.css'

class DetailPanel extends React.Component {
  render() {
    return (
      <div className="detail-panel">
        <h2>Detail</h2>
        <h3>{this.props.clicked}</h3>
        
      </div>
    )
  }
}

export default DetailPanel