import React from 'react'
import Link from 'next/link'
import cx from 'classnames'

const Nav = ({ page }) => {
  return (
    <div className="nav">
      <Link href="/">
        <a className={cx('nav-link', { active: page == 'Main' })}>Main Page</a>
      </Link>
      <Link href="/product">
        <a className={cx('nav-link', { active: page == 'Product' })}>Product</a>
      </Link>
    </div>
  )
}

export default Nav
