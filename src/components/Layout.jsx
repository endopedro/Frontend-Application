import React, { useEffect } from 'react'
import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux'

import { fetchConfigData } from '../store/config/actions'

import Topbar from './Topbar'
import Sidebar from './Sidebar'

const Layout = ({ children, title }) => {
  const dispatch = useDispatch()
  const config = useSelector((state) => state.config.data)

  useEffect(() => {
    if (!config) dispatch(fetchConfigData())
  }, [dispatch])
  console.log(config)

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
