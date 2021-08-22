import React from 'react'
import Head from 'next/head'
import Topbar from './Topbar'
import Sidebar from './Sidebar'

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <Topbar />
        <Sidebar />
        {children}
      </main>
    </>
  )
}

export default Layout
