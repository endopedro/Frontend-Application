import React from 'react'

import Card from '../../../components/Card'
import Map from './Map'

const ProductMap = ({ company }) => {
  return (
    <Card title="Map">
      <div className="map">
        <Map address={company?.address} />
      </div>
    </Card>
  )
}

export default ProductMap
