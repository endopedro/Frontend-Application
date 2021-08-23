import React, { useEffect } from 'react'
import Head from 'next/head'
import toast, { Toaster } from 'react-hot-toast'
import { useSelector, useDispatch } from 'react-redux'

import { fetchConfigData } from '../store/config/actions'
import { fetchProductData } from '../store/product/actions'
import { fetchTrlData } from '../store/trl/actions'
import { clearNofitication } from '../store/ui/actions'

import Topbar from './Topbar'
import Sidebar from './Sidebar'

const Layout = ({ children, title }) => {
  const dispatch = useDispatch()
  const config = useSelector((state) => state.config.data)
  const product = useSelector((state) => state.product.data)
  const trl = useSelector((state) => state.trl.data)
  const notification = useSelector((state) => state.ui.notification)

  useEffect(() => {
    if (!config) dispatch(fetchConfigData())
    if (!product) dispatch(fetchProductData())
    if (!trl) dispatch(fetchTrlData())
  }, [dispatch])
  console.log(config)
  console.log(product)
  console.log(trl)
  console.log(notification)

  useEffect(() => {
    if (notification) {
      toast[notification.status](notification.message)
      dispatch(clearNofitication())
    }
  }, [notification])

  if (!config) return <></>

  return (
    <>
      <Head>
        <title>{title}</title>
        <style>{`:root {--color-primary: ${config?.mainColor};}`}</style>
      </Head>
      <main>
        <Topbar />
        <div className="container">
          <Sidebar page={title} />
          {children}
        </div>
        <Toaster />
      </main>
    </>
  )
}

export default Layout
