import React from 'react'

import Nav from './Nav'

const Sidebar = ({ page }) => {
  return (
    <div className="sidebar">
      <Nav page={page} />
    </div>
  )
}

export default Sidebar
