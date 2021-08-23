import React from 'react'
import { useSelector } from 'react-redux'

import Card from '../../components/Card'

const ProductMainInfo = () => {
  const product = useSelector((state) => state.product.data)

  return (
    <Card title="Product">
      <h2>{product.name}</h2>
      <span className="text-small">{product.type.name}</span>
    </Card>
  )
}

export default ProductMainInfo
