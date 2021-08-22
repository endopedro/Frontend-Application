import React from 'react'
import Link from 'next/link'
import cx from 'classnames'

const Sidebar = ({ page }) => {
  return (
    <div className="sidebar">
      <div className="nav">
        <Link href="/">
          <a className={cx('nav-link', { active: page == 'Main' })}>
            Main Page
          </a>
        </Link>
        <Link href="/product">
          <a className={cx('nav-link', { active: page == 'Product' })}>
            Product
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
