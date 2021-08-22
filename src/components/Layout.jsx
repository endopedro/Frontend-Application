import React, { useEffect } from 'react'
import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux'

import { fetchConfigData } from '../store/config/actions'
import { fetchProductData } from '../store/product/actions'
import { fetchTrlData } from '../store/trl/actions'

import Topbar from './Topbar'
import Sidebar from './Sidebar'

const Layout = ({ children, title }) => {
  const dispatch = useDispatch()
  const config = useSelector((state) => state.config.data)
  const product = useSelector((state) => state.product.data)
  const trl = useSelector((state) => state.trl.data)

  useEffect(() => {
    if (!config) dispatch(fetchConfigData())
    if (!product) dispatch(fetchProductData())
    if (!trl) dispatch(fetchTrlData())
  }, [dispatch])
  console.log(config)
  console.log(product)
  console.log(trl)

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
