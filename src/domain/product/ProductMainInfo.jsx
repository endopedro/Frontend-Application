import React from 'react'
import Card from '../../components/Card'

const ProductMainInfo = ({ name, type }) => {
  return (
    <Card title="Product">
      <h2>{name}</h2>
      <span className="text-small">{type}</span>
    </Card>
  )
}

export default ProductMainInfo
