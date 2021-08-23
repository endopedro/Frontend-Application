import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import MobileNav from './MobileNav'

const Topbar = ({ page }) => {
  const logo = useSelector((state) => state.config.data?.logo)

  return (
    <div className="topbar">
      <Image className="logo" src={logo} alt="logo" width={200} height={28} />
      <MobileNav page={page} />
    </div>
  )
}

export default Topbar
