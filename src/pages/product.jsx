import React from 'react'
import { useSelector } from 'react-redux'

import Layout from '../components/Layout'
import ProductPicture from '../domain/product/ProductPicture'

const ProductPage = () => {
  const product = useSelector((state) => state.product.data)

  return (
    <Layout title="Product">
      <div className="page product-page">
        <ProductPicture picture={product?.picture} />
      </div>
    </Layout>
  )
}

export default ProductPage
