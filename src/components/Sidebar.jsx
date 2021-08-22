import React from 'react'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="nav">
        <Link href="/" className="nav-link">
          <a>Main Page</a>
        </Link>
        <Link href="/product" className="nav-link">
          <a>Product</a>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
