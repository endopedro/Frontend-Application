import React from 'react'
import { useSelector } from 'react-redux'

import Layout from '../components/Layout'
import ProductPicture from '../domain/product/ProductPicture'
import ProductMainInfo from '../domain/product/ProductMainInfo'

const ProductPage = () => {
  const product = useSelector((state) => state.product.data)

  return (
    <Layout title="Product">
      <div className="page product-page">
        <div className="product-info">
          <ProductPicture picture={product?.picture} />
          <ProductMainInfo name={product?.name} type={product?.type.name} />
        </div>
      </div>
    </Layout>
  )
}

export default ProductPage
