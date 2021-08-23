import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'

const ProductPicture = () => {
  const product = useSelector((state) => state.product.data)

  return (
    <div className="product-picture">
      <Image
        className="image"
        src={product.picture}
        alt="product picture"
        height={220}
        width={500}
      />
    </div>
  )
}

export default ProductPicture
