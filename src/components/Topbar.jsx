import React from 'react'
import { useSelector } from 'react-redux'

const Topbar = () => {
  const logo = useSelector((state) => state.config.data?.logo)

  return (
    <div className="topbar">
      <img className="logo" src={logo} alt="logo" />
    </div>
  )
}

export default Topbar
