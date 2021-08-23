import React from 'react'
import { useSelector } from 'react-redux'
import MobileNav from './MobileNav'

const Topbar = ({ page }) => {
  const logo = useSelector((state) => state.config.data?.logo)

  return (
    <div className="topbar">
      <img className="logo" src={logo} alt="logo" />
      <MobileNav page={page} />
    </div>
  )
}

export default Topbar
