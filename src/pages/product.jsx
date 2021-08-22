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

  return (
    <Layout title="Product">
      {product ? (
        <div className="page product-page">
          <div className="product-info">
            <ProductPicture picture={product?.picture} />
            <ProductMainInfo name={product?.name} type={product?.type.name} />
            <ProductContent {...product} />
          </div>
          <div className="side-info">
            <ProductUser user={product?.user} company={product?.company} />
            <ProductMap company={product?.company} />
          </div>
        </div>
      ) : (
        <></>
      )}
    </Layout>
  )
}

export default ProductPage
