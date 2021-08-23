import React from 'react'
import { useSelector } from 'react-redux'

import Layout from '../components/Layout'
import ProductPicture from '../domain/product/ProductPicture'
import ProductMainInfo from '../domain/product/ProductMainInfo'
import ProductContent from '../domain/product/ProductContent'
import ProductUser from '../domain/product/ProductUser'
import ProductMap from '../domain/product/ProductMap'

const ProductPage = () => {
  const product = useSelector((state) => state.product.data)
  const config = useSelector((state) => state.config.data)

  return (
    <Layout title="Product">
      {product ? (
        <div className="product-page">
          <div className="product-info">
            <ProductPicture />
            <ProductMainInfo />
            <ProductContent />
          </div>
          <div className="side-info">
            {config?.hasUserSection && <ProductUser />}
            <ProductMap />
          </div>
        </div>
      ) : (
        <></>
      )}
    </Layout>
  )
}

export default ProductPage
