import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'

const Topbar = () => {
  const logo = useSelector((state) => state.config.data?.logo)

  return (
    <div className="topbar">
      <Image className="logo" src={logo} alt="logo" width={200} height={28} />
    </div>
  )
}

export default Topbar
